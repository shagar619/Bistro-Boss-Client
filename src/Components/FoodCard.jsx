import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import useAxios from "../hooks/useAxios";
import useCart from "../hooks/useCart";


const FoodCard = ({ item }) => {

    const { image, name, recipe, price, _id } = item;

    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxios();
    const [ , refetch ] = useCart();


    const handleAddToCart = () => {

        if(user && user.email) {

            // send cart item to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post("/carts", cartItem)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "middle",
                        icon: "success",
                        title: `${name} Added to your cart`,
                        showConfirmButton: true,
                    });
                    // refetch cart to update the cart items count
                    refetch();
                }
            })

        } else{
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
                }).then((result) => {
                if (result.isConfirmed) {
                    //  send the user to the login page
                    navigate('/login', {state: {from: location}})
                }
            });
        }
    }

    return (
        <div>
        <div className="flex flex-col h-full bg-slate-100 shadow-lg pb-8">
            <img src={image} alt="" />
            <h3 className="text-center text-[#151515] text-2xl font-semibold mt-8">{name}</h3>
            <p className="text-[#151515] text-base text-center my-6">{recipe}</p>
            <p className="text-center text-orange-700 text-xl font-semibold mb-7 mt-auto">Price : $ {price}</p>
            <p className="text-center mt-auto"><Link><button 
            onClick={handleAddToCart}
            className="btn uppercase text-[#BB8506] bg-[#E8E8E8] border-b-4 border-b-[#BB8506] text-xl font-medium">Add to cart</button></Link></p>
        </div>
        </div>
    );
};

export default FoodCard;