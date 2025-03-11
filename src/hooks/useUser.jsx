import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useUser = () => {

    const { user } = useAuth();
    const axiosSecure = useAxios();

    const { data: participant = {}, refetch } = useQuery({
        queryKey: [user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${user.email}`);
            return res.data;
        }
    })

    return [ participant, refetch ]
};

export default useUser;