import SectionTitle from "./SectionTitle";
import featuredImage from './../assets/home/featured.jpg';
import { Link } from "react-router-dom";
import './../CSS/Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed py-32 mb-32">

        <SectionTitle
            subHeading={"---Check it out---"}
            heading={"FROM OUR MENU"}>
        </SectionTitle>
            
        <div className="w-9/12 mx-auto">
            <div className="md:flex justify-center items-center gap-16">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className="space-y-4 text-white">
                    <h4 className="text-xl">July 15, 2025</h4>
                    <h3 className="uppercase text-2xl">Where can I get some?</h3>
                    <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <p className="mt-4"><Link><button className="btn btn-outline uppercase border-0 border-b-4">Read More</button></Link></p>
                </div>
            </div>
        </div>

        </div>
    );
};

export default Featured;