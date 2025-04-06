import { Link } from "react-router-dom";


const RecommendItem = ({ item }) => {
    const { image, name, recipe } = item;
    return (
        <div className="flex flex-col h-full bg-slate-100 shadow-lg pb-8">
            <img src={image} alt={name} />
            <h3 className="text-center text-[#151515] text-2xl font-semibold mt-8">{name}</h3>
            <p className="text-[#151515] text-base text-center my-6">{recipe}</p>
            <p className="text-center mt-auto"><Link><button className="btn uppercase text-[#BB8506] bg-[#E8E8E8] border-b-4 border-b-[#BB8506] text-xl font-medium">Add to cart</button></Link></p>
        </div>
    );
};

export default RecommendItem;