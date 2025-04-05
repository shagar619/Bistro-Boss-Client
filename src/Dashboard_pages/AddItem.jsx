import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../Components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddItem = () => {

        const { register, handleSubmit, reset, formState: { errors } } = useForm();
        const axiosPublic = useAxiosPublic();
        const axiosSecure = useAxios();

        const onSubmit = async (data) => {
            console.log(data);
            

            // image upload to img bb and then get an url
            const imageFile = { image: data.image[0] };
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers : {
                    'content-type': 'multipart/form-data'
                }
            });
            if(res.data.success) {
                // now send the menu item data to the server with the image url
                const menuItem = {
                    name: data.name,
                    category: data.category,
                    price: parseFloat(data.price),
                    recipe: data.recipe,
                    image: res.data.data.display_url
                }
                // 
                const menuRes = await axiosSecure.post('/menu', menuItem)
                console.log(menuRes.data);
                if(menuRes.data.insertedId) {
                    // show success popup
                    reset();
                    Swal.fire({
                        position: "middle",
                        icon: "success",
                        title: `${data.name} is added to the menu.`,
                        showConfirmButton: true,
                    });
                }
            }

        };

    return (
        <div className="pb-56">

            <Helmet>
                <title>BISTRO BOSS | DASHBOARD | ADD ITEM</title>
            </Helmet>

            <SectionTitle
            subHeading={"---What's new?---"}
            heading={"ADD AN ITEM"}>
            </SectionTitle>

            <div className="bg-[#F3F3F3] shadow-lg p-12 mx-32">

            <form onSubmit={handleSubmit(onSubmit)}>


            {/* Recipe name */}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Recipe Name *</span>
                </div>
                    <input 
                    {...register('name', { required: true })}
                    type="text" name="name" placeholder="Enter Recipe Name" className="input input-bordered w-full rounded-sm border-none" />
                    {errors.name && <span className="text-red-600">Name is required</span>}
            </label>

            <div className="flex justify-between items-center gap-6">


            {/* category */}
            <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-lg font-normal">Category *</span>
                    </div>
                    <select 
                    {...register('category', { required: true })}
                    defaultValue={'Select a category'} name="category" required className="select text-base font-normal text-gray-500 select-bordered w-full rounded-sm border-none">
                        <option disabled>Select a category</option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                        <option value="drinks">Drinks</option>
                    </select>
                    {errors.name && <span className="text-red-600">Please select a category</span>}
            </label>


            {/* price */}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Price *</span>
                </div>
                    <input 
                    {...register('price', { required: true })}
                    type="number" name="price" placeholder="Enter Price" className="input input-bordered w-full rounded-sm border-none" />
                    {errors.name && <span className="text-red-600">Price is required</span>}
            </label>

            </div>


            {/* Recipe details */}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Recipe Details *</span>
                </div>
                <textarea 
                {...register('recipe', { required: true })}
                className="textarea textarea-bordered h-24 rounded-sm border-none" placeholder="Recipe Details"></textarea>
                {errors.name && <span className="text-red-600">Recipe Details is required</span>}
            </label>

            <div className="form-control w-full my-6">
                <input 
                {...register('image', { required: true })}
                type="file" className="file-input w-full max-w-xs rounded-sm" />
                {errors.name && <span className="text-red-600">Image is required</span>}
            </div>

            <button className="btn bg-[#D1A054] text-xl font-medium text-white rounded-sm">
                Add Item <FaUtensils className="ml-4"></FaUtensils>
            </button>

            </form>

            </div>
            
        </div>
    );
};

export default AddItem;
