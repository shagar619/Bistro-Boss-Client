
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";



const Navbar = () => {

    const { user,logOutUser } = useContext(AuthContext);
    const [ isAdmin ] = useAdmin();
    const [ cart ] = useCart();

    const handleLogOut = () => {
        logOutUser()
        .then((result) => {
            Swal.fire({
                icon: "success",
                title: "Congratulation",
                text: "Successfully Sign Out!",
            });
        })
        .catch(error => console.log(error));
    }

    const links = <>

    <NavLink 
    className={({ isActive }) => `font-bold ${isActive? 'text-warning': 'hover:text-warning transition hover:scale-110'}`}
    to="/">HOME</NavLink>

    <NavLink 
    className={({ isActive }) => `font-bold ${isActive? 'text-warning': 'hover:text-warning transition hover:scale-110'}`}
    to="/contacts">CONTACT US</NavLink>

    <NavLink 
    className={({ isActive }) => `font-bold ${isActive? 'text-warning': 'hover:text-warning transition hover:scale-110'}`}
    to="/menu">OUR MENU</NavLink>

    <NavLink 
    className={({ isActive }) => `font-bold ${isActive? 'text-warning': 'hover:text-warning transition hover:scale-110'}`}
    to="/order/salad">ORDER FOOD</NavLink>


        {
            user && isAdmin && <li className="hover:text-warning text-lg font-medium transition hover:scale-105 uppercase"><Link 
            to="/dashboard/adminHome">Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li className="hover:text-warning text-lg font-medium transition hover:scale-105 uppercase"><Link
            to="/dashboard/userHome">Dashboard</Link></li>
        }

        {
            user && 
            <Link to="/dashboard/cart">

                <button className="btn">
                <FaCartShopping className="text-green-600 h-6 w-6"></FaCartShopping>
                <div className="badge badge-secondary">{cart.length}</div>
                </button>

            </Link>
        }
    
    </>

    return (
<div className="navbar max-w-screen-2xl py-6 bg-black text-white bg-opacity-30 z-50 fixed">
<div className="navbar-start">
    <div className="dropdown">
    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
    </div>
    <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-4 text-lg font-bold">
        {links}
    </ul>
    </div>
    <h3 className="text-3xl text-warning font-bold hover:text-orange-500 transition hover:scale-110">BISTRO BOSS <br /> RESTAURANT</h3>
</div>
<div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal flex items-center px-1 space-x-8 text-lg font-bold">
        {links}
    </ul>
</div>

<div className="navbar-end space-x-4">

{
    user ? 
    <div className="flex items-center gap-6 ">
        <h3 className="text-xl hover:text-warning font-medium transition hover:scale-105">{user.email}</h3>
        <button 
        onClick={handleLogOut}
        className="btn bg-orange-500 text-lg rounded-sm border-none text-black">Sign Out</button>
    </div>
    : 
    <>
    <Link className="underline text-xl font-semibold hover:text-warning transition hover:scale-110" to="/signup">Register</Link>
    <Link to="/login"><button className="btn bg-orange-500 text-lg rounded-sm border-none text-black">Sign In</button></Link>
    </>
}
</div>
</div>
);
};

export default Navbar;