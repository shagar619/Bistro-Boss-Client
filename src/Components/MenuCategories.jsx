import { Link } from "react-router-dom";
import Cover from "./Cover";
import MenuItem from "./MenuItem";

const MenuCategories = ({ items, title, subTitle, coverImg }) => {
    return (
        <div className="my-24">

            {title &&             
            <Cover 
            title={title}
            subTitle={subTitle}
            img={coverImg}>
            </Cover>}

            <div className="grid md:grid-cols-2 gap-8 mt-28">
                {
                    items.map(item => <MenuItem 
                        item={item}
                        key={item._id}></MenuItem>)
                }
            </div>
            <p className="mt-14 text-center"><Link
            to={`/order/${title}`}>
            <button className="btn btn-outline text-[#1F2937] text-xl font-medium uppercase border-0 border-b-4">ORDER YOUR FAVORITE FOOD</button></Link></p>
        </div>
    );
};

export default MenuCategories;