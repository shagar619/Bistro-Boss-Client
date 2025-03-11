import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../Components/SectionTitle";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { Helmet } from "react-helmet-async";


const MyBooking = () => {

    const { user } = useAuth();
    const axiosSecure = useAxios();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    })

    const totalPrice = payments.reduce((total, item) => total + item.price , 0);

    return (
        <div className="bg-slate-100 pb-56">

            <Helmet>
                <title>BISTRO BOSS | DASHBOARD | MY BOOKINGS</title>
            </Helmet>

            <SectionTitle
            heading={'MY BOOKINGS'}
            subHeading={'---Excellent Ambience---'}>
            </SectionTitle>

        <div className="bg-white p-12 mx-36">

        <div className="flex flex-col justify-between items-center mb-8">

        <h1 className="text-[#151515] text-[32px] font-bold uppercase">Total Bookings : {payments.length}</h1>
        <h1 className="text-[#151515] text-[32px] font-bold uppercase">Total Price : $ {totalPrice}</h1>

        </div>

        <div className="overflow-x-auto">
        <table className="table w-full">
        {/* head */}
        <thead className="bg-[#D1A054] text-base text-white font-semibold">
        <tr>
            <th>
                #
            </th>
            <th>E-mail</th>
            <th>Total Items</th>
            <th>Total Guest</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
    
            {
                payments.map((item, idx) => 
                <tr key={item._id} className="text-[#737373] text-base font-normal hover">
                    <th>
                        {idx + 1}
                    </th>

                    <td>
                        {item.email}
                    </td>
                    <th>
                        {item.menuItemId.length}
                    </th>
                    <th>
                        {item?.guest}
                    </th>
                    <td>
                        $ {item.price}
                    </td>

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

export default MyBooking;