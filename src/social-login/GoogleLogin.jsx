import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const GoogleLogin = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const { signInWithGoogle } = useAuth();
    const axiosPublic = useAxiosPublic();

    const from = location.state?.from?.pathname || "/";

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
        .then(result => {
            const userInfo = {
                name: result.user?.displayName,
                email: result.user?.email
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                Swal.fire({
                icon: "success",
                title: "Congratulation!",
                text: "Successfully Login With Google",
            });
            navigate(from, { replace: true });
            })
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div>
            <button 
                onClick={handleSignInWithGoogle}
                className="flex justify-center btn text-white items-center gap-4 border-none bg-[#D1A054] w-full py-2 font-bold text-xl rounded-md mt-8 hover:text-blue-600"><FaGoogle className="text-blue-600"></FaGoogle>Sign Up With Google</button>
        </div>
    );
};

export default GoogleLogin;