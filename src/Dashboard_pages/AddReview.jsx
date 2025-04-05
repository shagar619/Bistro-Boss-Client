import { useForm } from "react-hook-form";
import SectionTitle from "../Components/SectionTitle";
import ReactStars from "react-stars";
import { useState } from "react";
import useUser from "../hooks/useUser";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const AddReview = () => {

    const [participant] = useUser();

    const [rating, setRating] = useState(0);
    const axiosPublic = useAxiosPublic();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = async (data) => {

        const res = await axiosPublic.post('/reviews', {
            recipe: data.recipe,
            name: participant.name || participant?.displayName,
            participantEmail: participant.email,
            rating: rating,
            suggestion: data.suggestion,
            comments: data.comments
        })
        if(res.data.insertedId){
            // show success popup
            reset();
            Swal.fire({
                position: "middle",
                icon: "success",
                title: `Your Review is Successfully Added!`,
                showConfirmButton: true,});
        }
        
    }


    return (
        <div>

            <Helmet>
                <title>BISTRO BOSS | DASHBOARD | ADD REVIEW</title>
            </Helmet>

            <SectionTitle
            subHeading={'---Sharing is Caring!!!---'}
            heading={'GIVE A REVIEW...'}>
            </SectionTitle>

            <div className="bg-gray-100 shadow-lg mx-12 md:mx-24 mb-44">

            <form onSubmit={handleSubmit(onSubmit)}
            className="w-10/12 mx-auto pb-12 pt-16">

            <div className="lg:w-1/3 mx-auto mb-8">
                <h2 className="text-center text-2xl font-semibold text-orange-600">Rate Us</h2>
                <ReactStars
                    count={5}
                    value={rating}
                    size={60}
                    color1={'#28affa'}
                    color2={"#ff7b00"}
                    onChange={(rate) => setRating(rate)}/>
                <p className="text-center text-xl font-semibold text-[#ff7b00]">Your Rating: {rating} stars</p>
            </div>



            {/* Recipe */}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Which recipe you liked most? *</span>
                </div>
                    <input 
                    {...register('recipe', { required: true })}
                    type="text" name="recipe" placeholder="Recipe you liked most" className="input input-bordered w-full rounded-sm border-none" />
                    {errors.name && <span className="text-red-600">Recipe is required</span>}
            </label>

            {/* Suggestion */}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Do you have any suggestion for us? *</span>
                </div>
                    <input 
                    {...register('suggestion', { required: true })}
                    type="text" name="suggestion" placeholder="Suggestion" className="input input-bordered w-full rounded-sm border-none" />
                    {errors.name && <span className="text-red-600">Suggestion is required</span>}
            </label>





                {/* user contact details */}
                <label className="form-control w-full my-8">
                    <div className="label">
                        <span className="label-text text-lg font-normal">Kindly express your care in a short way *</span>
                    </div>
                    <textarea 
                    {...register('comments', { required: true })}
                    name="comments"
                    className="textarea textarea-bordered h-32 text-lg rounded-sm border-none" placeholder="Share Your Experience....."></textarea>
                    {errors.name && <span className="text-red-600">Contact Details is required</span>}
                </label>

                <p className="text-center my-12"><button className="btn bg-orange-400 text-white text-lg font-bold uppercase rounded-sm">Submit Review</button></p>

            </form>

            </div>
            
        </div>
    );
};

export default AddReview;