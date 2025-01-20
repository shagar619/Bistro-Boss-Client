import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../Components/SectionTitle";
import useMenu from "../hooks/useMenu";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";


const ManageItems = () => {

    const [ menu, ,refetch ] = useMenu();
    const axiosSecure = useAxios();

    const handleDeleteItem = async (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                if(res.data.deletedCount > 0) {
                    refetch()
                Swal.fire({
                title: "Deleted!",
                text:  `${item.name} has been deleted`,
                icon: "success"
            });
                }
            }
        });
    }



    return (
        <div className="bg-slate-100 pb-56">

        <SectionTitle 
        subHeading={"---Hurry Up!---"}
        heading={"MANAGE ALL ITEMS"}>
        </SectionTitle>



    <div className="bg-white p-12 mx-36">



    <h1 className="text-[#151515] text-[32px] font-bold uppercase mb-8">Total Items : {menu.length}</h1>


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
        <th>Action</th>
    </tr>
    </thead>
    <tbody>

        {
            menu.map((item, idx) => 
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
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                        <button 
                        className="btn bg-[#D1A054]"><FaRegEdit className="text-xl text-white"></FaRegEdit></button>
                    </Link>
                </th>
                <th>
                    <button 
                    onClick={() => handleDeleteItem(item)}
                    className="btn bg-[#B91C1C]"><RiDeleteBin6Line className="text-xl text-white"></RiDeleteBin6Line></button>
                </th>
            </tr>
            )
        }

    </tbody>
    </table>
    </div>
    </div>
    </div>
    );
};

export default ManageItems;