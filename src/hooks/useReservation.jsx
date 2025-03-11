import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const useReservation = () => {
    const axiosSecure = useAxios();
    const { user } = useAuth();

    // tanstack query

    const { refetch ,data: reservation = [] } = useQuery({
        queryKey: ['reservation', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/reservation?email=${user.email}`);
            return res.data;
        }
    })
    return [ reservation, refetch ];
};

export default useReservation;