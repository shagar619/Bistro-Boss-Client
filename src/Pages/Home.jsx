import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import CallUs from "../Components/CallUs";
import ChefRecommends from "../Components/ChefRecommends";
import Featured from "../Components/Featured";
import FoodCategories from "../Components/FoodCategories";
import MidPart from "../Components/MidPart";
import PopularMenu from "../Components/PopularMenu";
import Testimonials from "../Components/Testimonials";


const Home = () => {
    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            
            <Banner></Banner>
            <FoodCategories></FoodCategories>
            <MidPart></MidPart>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;