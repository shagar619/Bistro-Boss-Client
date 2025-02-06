import useAuth from "../hooks/useAuth";


const UserHome = () => {

    const { user } = useAuth();

    return (
        <div>

            <h2 className="text-[#151515] text-3xl font-semibold">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : "Back"
                }
            </h2>
            
        </div>
    );
};

export default UserHome;