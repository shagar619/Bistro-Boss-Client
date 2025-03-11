import { Helmet } from "react-helmet-async";
import loginImg from './../assets/others/authentication2.png';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import GoogleLogin from "../social-login/GoogleLogin";


const Login = () => {

    const { signInUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const [disabled, setDisabled] = useState(true);

    const from = location.state?.from?.pathname || "/";



    useEffect(() => {
        loadCaptchaEnginge(6);
    } , [])


    // const handleSignInWithGoogle = () => {
    //     signInWithGoogle()
    //     .then(result => {
    //         Swal.fire({
    //             icon: "success",
    //             title: "Congratulation!",
    //             text: "Successfully Login With Google",
    //         });
    //         navigate(from, { replace: true });
    //     })
    //     .catch(error => {
    //         console.log(error.message);
    //     })
    // }


    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then(result => {
            Swal.fire({
                icon: "success",
                title: "Congratulation",
                text: "Successfully Login",
            });
            navigate(from, { replace: true });
        })
        .catch(error => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Wrong E-mail or Password!",
            });
        })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

    return (
        <div 
        className="py-28"
        style={{backgroundImage: "url(https://i.ibb.co.com/3S5NpzN/authentication.png)"}}>

            <Helmet>
                <title>BISTRO BOSS | LOGIN</title>
            </Helmet>

            <div 
            style={{boxShadow: '5px 5px 5px 5px rgba(0,0,0,0.25)'}}
            className="w-10/12 mx-auto p-36 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                <div className="col-span-1">
                    <img src={loginImg} alt="" />
                </div>

                <div>
                    <h3 className="text-center text-4xl font-bold text-[#151515]">Login</h3>

                    <form onSubmit={handleLogin}>

                    <label className="form-control w-full">
                        <div className="label">
                           <span className="label-text text-lg font-normal">E-mail *</span>
                        </div>
                        <input type="email" name="email" placeholder="Enter Your E-mail" className="input input-bordered w-full" />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                           <span className="label-text text-lg font-normal">Password *</span>
                        </div>
                        <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered w-full" />
                    </label>


                    {/* captcha */}

                    <label className="form-control w-full">
                        <div className="label">
                            <LoadCanvasTemplate />
                        </div>
                        <input 
                        onBlur={handleValidateCaptcha}
                        type="" name="captcha" placeholder="Type the captcha above" className="input input-bordered w-full" />
                    </label>


                    <input 
                    disabled={disabled}
                    className="bg-[#d1a054b3] btn text-xl font-bold text-white w-full py-2 mt-6 rounded cursor-pointer" type="submit" value="Login" />

                    </form>

                    <p className="text-xl font-bold text-[#D1A054] text-center my-5">Don't have an account? <Link className="underline text-lg font-bold" to="/signup"><span className="hover:text-orange-400">Sign Up</span></Link></p>

                    <h3 className="text-center text-xl font-bold underline hover:text-[#D1A054]">Or Sign Up with</h3>

                    {/* google signin button */}

                    <GoogleLogin></GoogleLogin>

                </div>

            </div>

        </div>
    );
};

export default Login;