import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../Components/SectionTitle";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { Helmet } from "react-helmet-async";


const PaymentHistory = () => {

    const { user } = useAuth();
    const axiosSecure = useAxios();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    })

    return (
        <div className="bg-slate-100 pb-56">

            <Helmet>
                <title>BISTRO BOSS | DASHBOARD | PAYMENT HISTORY</title>
            </Helmet>

            <SectionTitle 
            subHeading={"---At a Glance!---"}
            heading={"PAYMENT HISTORY"}>
            </SectionTitle>
        
        <div className="bg-white shadow-lg p-12 mx-36">

        <h1 className="text-[#151515] text-[32px] font-bold uppercase my-8">Total Payments : {payments.length}</h1>

                <div className="overflow-x-auto">
                <table className="table w-full">
                {/* head */}
                <thead className="bg-[#D1A054] text-base text-white font-semibold">
                <tr>
                    <th>
                        #
                    </th>
                    <th>E-mail</th>
                    <th>Price</th>
                    <th>Transaction ID</th>
                    <th>Status</th>
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
                            <td>
                                $ {item.price}
                            </td>
                            <th>
                                {item.transactionId}
                            </th>
                            <th>
                                {item.status}
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

export default PaymentHistory;