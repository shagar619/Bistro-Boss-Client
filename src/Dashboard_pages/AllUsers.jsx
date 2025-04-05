import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../Components/SectionTitle";
import useAxios from "../hooks/useAxios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const AllUsers = () => {

    const axiosSecure = useAxios();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });


    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: true,
                });
            }
        })
    }




    const handleDeleteUser = (id) => {
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

            axiosSecure.delete(`/users/${id}`)
            .then(res => {
            if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
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
                <title>BISTRO BOSS | DASHBOARD | ALL USERS</title>
            </Helmet>
            
            <SectionTitle 
            subHeading={"---How many??---"}
            heading={"MANAGE ALL USERS"}>
            </SectionTitle>

<div className="bg-white shadow-lg p-12 mx-36">

            <h2 className="text-[#151515] text-[32px] font-bold mb-8">Total Users : {users.length}</h2>

            {/* table */}

        <div className="overflow-x-auto">

        <table className="table w-full">

    {/* head */}
        <thead className="bg-[#D1A054] text-base text-white font-semibold">
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>E-mail</th>
                <th>Role</th>
                <th>Action</th>
                </tr>
        </thead>

        <tbody>

    {
        users.map((user, idx) => 
        <tr key={idx} className="text-[#737373] text-base font-normal hover">
            <th>{idx + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>

            { 

            user.role === 'admin' ? 'Admin' 

            :

            <button 
                onClick={() => handleMakeAdmin(user)}
                className="btn bg-[#D1A054]"><FaUsers className="text-xl text-white"></FaUsers>
            </button> }

            </td>
            <td>
                <button 
                onClick={() => handleDeleteUser(user._id)}
                className="btn bg-[#B91C1C]"><RiDeleteBin6Line className="text-xl text-white"></RiDeleteBin6Line></button>
            </td>
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

export default AllUsers;