import { Link, useNavigate } from "react-router-dom";
import loginImg from './../assets/others/authentication2.png';
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import GoogleLogin from "../social-login/GoogleLogin";


const SignUp = () => {

    const axiosPublic = useAxiosPublic();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const { createUser } = useContext(AuthContext);





    const onSubmit = data => {
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;

            const userInfo = {
                name: data.name,
                email: data.email
            }

            // create user entry in the database
            axiosPublic.post('/users', userInfo)
            .then(res => {
                if(res.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'middle',
                        icon: 'success',
                        title: 'Congratulations!',
                        text: "User Created Successfully",
                        showConfirmButton: true,
                    });
                    navigate('/');
                }
            })
        })
        .catch(error => {
            console.log(error.message);
        })
    }


    return (
        <div 
        className="py-28"
        style={{backgroundImage: "url(https://i.ibb.co.com/3S5NpzN/authentication.png)"}}>

            <Helmet>
                <title>BISTRO BOSS | SIGN UP</title>
            </Helmet>

            <div 
            style={{boxShadow: '5px 5px 5px 5px rgba(0,0,0,0.25)'}}
            className="w-10/12 mx-auto p-36 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                <div>
                    <h3 className="text-center text-4xl font-bold text-[#151515]">Sign Up</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>

                    <label className="form-control w-full">
                        <div className="label">
                           <span className="label-text text-lg font-normal">Name *</span>
                        </div>
                        <input 
                        {...register("name", { required: true })}
                        type="text" name="name" placeholder="Enter Your Name" className="input input-bordered w-full rounded-sm border-none" />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </label>   

                    <label 
                    {...register("email", { required: true })}
                    className="form-control w-full">
                        <div className="label">
                           <span className="label-text text-lg font-normal">E-mail *</span>
                        </div>
                        <input type="email" name="email" placeholder="Enter Your E-mail" className="input input-bordered w-full rounded-sm border-none" />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </label>

                    <label 
                    className="form-control w-full">
                        <div className="label">
                           <span className="label-text text-lg font-normal">Password *</span>
                        </div>
                        <input 
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })}
                        type="password" name="password" placeholder="Enter Your Password" className="input input-bordered w-full rounded-sm border-none" />

                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}

                    </label>


                    <input 
                    className="bg-[#d1a054b3] btn text-xl font-bold text-white w-full py-2 mt-6 cursor-pointer rounded-sm" type="submit" value="Sign Up" />

                    </form>

                    <p className="text-xl font-bold text-[#D1A054] text-center my-5">Already have an account? <Link className="underline text-lg font-bold" to="/login"><span className="transition hover:scale-105 hover:text-orange-400">Sign In</span></Link></p>

                    <h3 className="text-center text-xl font-bold underline hover:text-[#D1A054]">Or Sign Up with</h3>
                    
                    {/* google sign in button */}

                    <GoogleLogin></GoogleLogin>

                </div>


                <div className="col-span-1">
                    <img src={loginImg} alt="" />
                </div>

            </div>

        </div>
    );
};

export default SignUp;