import { useForm } from "react-hook-form";
import useAxios from "../hooks/useAxios";
import SectionTitle from "../Components/SectionTitle";
import { Helmet } from "react-helmet-async";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router-dom";


const Reservation = () => {

    const axiosSecure = useAxios();
    const [participant] = useUser();

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {

            const booking = {
                name: data.name,
                email: data.email,
                phoneNumber: data.phone,
                time: data.time,
                date: data.date,
                guest: data.guest,
            }

            const campRes = await axiosSecure.post('/reservation', booking)
            if(campRes.data.insertedId) {

                navigate('/dashboard/payment');

            }
        }


    return (
        <div>

            <Helmet>
                <title>BISTRO BOSS | DASHBOARD | RESERVATION</title>
            </Helmet>

        <SectionTitle
            subHeading={'---Reservation---'}
            heading={'BOOK A TABLE'}>
        </SectionTitle>

        <div className="bg-[#F3F3F3] p-12 mx-32">

        <form onSubmit={handleSubmit(onSubmit)}>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 mb-10">

        {/* Date */}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Date *</span>
                </div>
                    <input 
                    {...register('date', { required: true })}
                    type="date" name="date"  className="input input-bordered w-full" />
                    {errors.name && <span className="text-red-600">Date is required</span>}
            </label>
            
        {/* Time */}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Time *</span>
                </div>
                    <input 
                    {...register('time', { required: true })}
                    type="time" name="time"  className="input input-bordered w-full" />
                    {errors.name && <span className="text-red-600">Time is required</span>}
            </label>


            {/* category */}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Guest *</span>
                </div>
                <select 
                {...register('guest', { required: true })}
                    name="guest" required className="select text-base font-normal text-gray-500 select-bordered w-full">
                    <option>1 Person</option>
                    <option>2 Persons</option>
                    <option>3 Persons</option>
                    <option>4 Persons</option>
                    <option>5 Persons</option>
                    </select>
                    {errors.name && <span className="text-red-600">Please select a category</span>}
            </label>


        {/* Name */}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Name *</span>
                </div>
                    <input 
                    {...register('name', { required: true })}
                    type="text" name="name"  className="input input-bordered w-full" />
                    {errors.name && <span className="text-red-600">Name is required</span>}
            </label>

        {/* Phone */}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Phone Number *</span>
                </div>
                    <input 
                    {...register('phone', { required: true })}
                    type="number" name="phone"  className="input input-bordered w-full" />
                    {errors.name && <span className="text-red-600">Phone Number is required</span>}
            </label>

        {/* E-mail */}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">E-mail *</span>
                </div>
                    <input 
                    value={participant.email}
                    {...register('email', { required: true })}
                    type="email" name="email"  className="input input-bordered w-full" />
                    {errors.name && <span className="text-red-600">E-mail is required</span>}
            </label>

        </div>


        <p className="text-center">
        <button
        style={{background: 'linear-gradient(90.00deg, rgb(131, 93, 35),rgb(181, 129, 48) 100%)'}}
        className="btn text-xl font-semibold text-white">
            PAY
        </button>
        </p>

            </form>

            </div>
            
        </div>        
    );
};

export default Reservation;