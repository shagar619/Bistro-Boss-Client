import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../Components/SectionTitle";
import useAxios from "../hooks/useAxios";
import { IoMdCheckmark } from "react-icons/io";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const ManageBookings = () => {

    const axiosSecure = useAxios();

    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payments'],
        queryFn: async() => {
            const res = await axiosSecure.get('payments');
            return res.data;
        }
    })


    const handleConfirmPayment = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You want to accept this payment!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Confirm it!"
        }).then(result => {
            if(result.isConfirmed){
                axiosSecure.patch(`/payments/${id}`)
                .then(res => {
                    if(res.data.modifiedCount > 0){
                        refetch();
                        Swal.fire({
                            position: "middle",
                            icon: "success",
                            title: `This Payment is Confirm Now!`,
                            showConfirmButton: true,
                        });
                    }
                })
            }
        })

    }

    return (
        <div className="bg-slate-100 pb-56">

            <Helmet>
                <title>BISTRO BOSS | DASHBOARD | MANAGE BOOKINGS</title>
            </Helmet>

            <SectionTitle
            subHeading={"---At a Glance!---"}
            heading={"MANAGE ALL BOOKINGS"}>
            </SectionTitle>

        <div className="bg-white shadow-lg p-12 mx-16">
            
            <h2 className="text-[#151515] text-[32px] font-bold mb-8">Total Bookings : {payments.length}</h2>
            
        {/* table */}
            
        <div className="overflow-x-auto font-serif">
            
        <table className="table w-full">
            
                {/* head */}
                    <thead className="bg-[#D1A054] text-base text-white font-semibold">
                        <tr>
                            <th>#</th>
                            <th>E-mail</th>
                            <th>TransactionId</th>
                            <th>Price</th>
                            <th>Time & Date</th>
                            <th>Status</th>
                            <th>Action</th>
                            </tr>
                    </thead>
            
            <tbody>
            
                {
                    payments.map((user, idx) => 
                    <tr key={idx} className="text-[#737373] text-base font-normal hover">
                        <th>{idx + 1}</th>
                        <td>{user.email}</td>
                        <td>{user.transactionId}</td>
                        <td>$ {user.price}</td>
                        <td>{user.date}</td>
                        <td>{user.status}</td>


                        {
                            user.status === 'pending' ? 
                            <>
                            <td>
                            <button 
                            onClick={() => handleConfirmPayment(user._id)}
                            className="btn bg-[#80E2B7] h-12 w-12 rounded-full"><IoMdCheckmark className="text-white"></IoMdCheckmark></button>
                            </td>
                            </>
                            :
                            <>
                            <td>
                            <button 
                            className="btn bg-[#287855] h-12 w-12 rounded-full"><IoMdCheckmark className="text-white"></IoMdCheckmark></button>
                            </td>
                            </>
                        }

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

export default ManageBookings;