import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const MainLayout = () => {

    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('/login') 
                            ||
                            location.pathname.includes('/signup');

    return (
        <div>
            {
                noHeaderFooter ||             
            <header>
                <Navbar></Navbar>
            </header>
            }

            <main>
                <Outlet></Outlet>
            </main>

            {
                noHeaderFooter || 
            <footer>
                <Footer></Footer>
            </footer>
            }
        </div>
    );
};

export default MainLayout;