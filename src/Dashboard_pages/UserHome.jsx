import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import { IoWalletSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdMenuBook} from "react-icons/md";
import useUser from "../hooks/useUser";


const UserHome = () => {

    const { user } = useAuth();
    const [participant] = useUser();

    const axiosSecure = useAxios();

    const { data: stats = [] } = useQuery({
        queryKey: ['register'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        }
    })

    const totalPrice = stats.reduce((total, item) => total + item.price, 0);


    return (
        <div className="px-12 md:px-16 py-24 bg-slate-100">

            <Helmet>
                <title>BISTRO BOSS | DASHBOARD | USER HOME</title>
            </Helmet>

            <h2 className="text-[#151515] text-3xl font-semibold">
                <span>Hi, Welcome </span>
                {
                    participant?.name ? participant.name : "Back"
                }
            </h2>


<div className="flex flex-col md:flex-row gap-8 my-16">


<div 
    style={{ 'background': 'linear-gradient(90.00deg, rgb(106, 174, 255),rgb(182, 247, 255) 100%)'}}
    className="flex items-center gap-8 py-9 px-12 text-white rounded-lg transition hover:scale-105 shadow-xl">
<div>
    <div><MdMenuBook className="text-6xl"></MdMenuBook></div>
</div>
<div>
    <h3 className="text-2xl font-medium uppercase">Total Carts</h3>
    <h3 className="text-[40px] font-extrabold">{stats.length}</h3>
</div>
</div>

<div 
    style={{ 'background': 'linear-gradient(90.00deg, rgb(187, 52, 245),rgb(252, 219, 255) 100%)'}}
    className="flex items-center gap-8 py-9 px-12 text-white rounded-lg transition hover:scale-105 shadow-xl">
<div>
    <div><IoWalletSharp className="text-6xl"></IoWalletSharp></div>
</div>
<div>
    <h3 className="text-2xl font-medium uppercase">Total Price</h3>
    <h3 className="text-[40px] font-extrabold">$ {totalPrice}</h3>
</div>

</div>


</div>


<div className="flex flex-col lg:flex-row">

<div className="bg-[#FFEDD5] flex-1 w-full py-24 flex flex-col justify-center items-center">
    <div className="bg-white h-52 w-52 rounded-full">
        <img className="w-full h-full transition hover:scale-110 rounded-full" src={participant?.image} alt="" />
    </div>
    <h3 className="text-[#151515] text-4xl font-semibold mt-12">{participant?.name}</h3>
</div>



<div className="bg-[#FEF9C3] flex-1 w-full pt-24 uppercase">
    <h3 className="text-[#151515] text-[40px] font-semibold mb-8 ml-4 md:ml-24">Your Activities</h3>

    <h4 className="flex items-center gap-4 text-[#0088FE] text-2xl font-semibold ml-4 md:ml-24"><MdMenuBook className="text-6xl"></MdMenuBook>Total Camp Join : {stats.length}</h4>

    <h4 className="flex items-center gap-4 text-[#00C4A1] text-2xl font-semibold ml-4 md:ml-24"><IoWalletSharp className="text-6xl"></IoWalletSharp>Total Price : {totalPrice}</h4>

</div>

</div>


<p className="text-center mt-12"><Link to="/dashboard/updateUser"><button 
style={{'background': 'linear-gradient(90.00deg, rgb(131, 93, 35),rgb(181, 129, 48) 100%)'}}
className="btn text-white text-xl font-semibold uppercase rounded-sm">Update Profile</button></Link></p>

</div>



);
};

export default UserHome;