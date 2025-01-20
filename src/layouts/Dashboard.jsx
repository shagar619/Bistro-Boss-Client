import { FaAd, FaAddressBook, FaCalendarAlt, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { GiWallet } from "react-icons/gi";
import { TbBrandBooking } from "react-icons/tb";
import { AiFillHome } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { RiMailOpenFill, RiPlayListAddLine } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {

    const [cart] = useCart();

    // TODO: get isAdmin value from the database
    const [ isAdmin ] = useAdmin();

    return (
        <div className="flex">

            {/* dashboard side bar */}

        <div className="w-72 min-h-full bg-[#D1A054]">

            <h2 className="text-center text-2xl font-bold text-[#151515] my-12">Bistro Boss <br /> <span className="text-[#151515] text-lg font-bold">Restaurant</span></h2>

            <ul className="menu p-6 text-base font-medium">

                {
                    isAdmin ? 

                    <>
                {/* Admin links */}

                <li>
                    <NavLink to="/dashboard/adminHome">
                    <AiFillHome></AiFillHome>
                        Admin Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/dashboard/addItems">
                    <FaUtensils></FaUtensils>
                        Add Items
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/dashboard/manageItems">
                    <TfiMenuAlt></TfiMenuAlt>
                        Manage Items
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/dashboard/bookings">
                    <FaAddressBook></FaAddressBook>
                        Manage Bookings
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/dashboard/users">
                    <FaUsers></FaUsers>
                        All Users
                    </NavLink>
                </li>


                    </>
                    :
                    <>

                    {/* Users links */}

                <li>
                    <NavLink to="/dashboard/userHome">
                    <AiFillHome></AiFillHome>
                        User Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/dashboard/reservation">
                    <FaCalendarAlt></FaCalendarAlt>
                        Reservation
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/dashboard/reservation">
                    <GiWallet></GiWallet>
                        Payment History
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/dashboard/cart">
                        <FaShoppingCart></FaShoppingCart>
                        My Cart ({cart.length})
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/dashboard/review">
                        <FaAd></FaAd>
                        Add a Review
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/dashboard/bookings">
                    <TbBrandBooking></TbBrandBooking>
                        My Bookings
                    </NavLink>
                </li>

                </>
        }




                {/* shared NavLinks */}

                <div className="divider "></div>



                <li>
                    <NavLink to="/">
                        <AiFillHome></AiFillHome>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/order/salad">
                    <IoMdMenu></IoMdMenu>
                        Menu
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/shop">
                    <MdShoppingBag></MdShoppingBag>
                        Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact">
                    <RiMailOpenFill></RiMailOpenFill>
                        Contact
                    </NavLink>
                </li>


                </ul>
        </div>


            {/* dashboard content */}

            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;
