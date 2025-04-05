
import Swal from "sweetalert2";
import useCart from "../hooks/useCart";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxios from "../hooks/useAxios";
import SectionTitle from "../Components/SectionTitle";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Cart = () => {

    const [ cart, refetch ] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price , 0);

    const axiosSecure = useAxios();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {

            axiosSecure.delete(`/carts/${id}`)
            .then(res => {
                if(res.data.deletedCount > 0){
                    refetch();
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your food item has been Deleted.",
                    icon: "success"
            });
            }
            })

            }
        });
    }

    return (
    <div className="bg-slate-100 pb-56">

        <Helmet>
            <title>BISTRO BOSS | DASHBOARD | CART</title>
        </Helmet>

        <SectionTitle 
        subHeading={"---My Cart---"}
        heading={"WANNA ADD MORE?"}>
        </SectionTitle>



    <div className="bg-white shadow-lg p-12 mx-36">


    <div className="flex justify-evenly items-center mb-8">
            <h1 className="text-[#151515] text-[32px] font-bold uppercase">Total Orders : {cart.length}</h1>

            <h1 className="text-[#151515] text-[32px] font-bold uppercase">Total Price : $ {totalPrice}</h1>

        { cart.length ? <Link to="/dashboard/reservation">
            <button className="btn bg-[#D1A054] text-white text-xl font-semibold rounded-sm">Booking</button>
        </Link> 
        :
        <button disabled className="btn bg-[#D1A054] text-white text-xl font-semibold rounded-sm">Booking</button>
        }

    </div>

    <div className="overflow-x-auto">
    <table className="table w-full">
    {/* head */}
    <thead className="bg-[#D1A054] text-base text-white font-semibold">
    <tr>
        <th>
            #
        </th>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
    </tr>
    </thead>
    <tbody>

        {
            cart.map((item, idx) => 
            <tr key={item._id} className="text-[#737373] text-base font-normal hover">
                <th>
                    {idx + 1}
                </th>
                <td>
                <div className="flex items-center gap-3">
                <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                    <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                </div>
                </td>
                <td>
                    {item.name}
                </td>
                <td>
                    $ {item.price}
                </td>
                <th>
                    <button 
                    onClick={() => handleDelete(item._id)}
                    className="btn bg-[#B91C1C]"><RiDeleteBin6Line className="text-xl text-white"></RiDeleteBin6Line></button>
                </th>
            </tr>
            )
        }

      {/* row 1 */}

    </tbody>
    </table>
    </div>

    
    </div>
    </div>
    );
};

export default Cart;