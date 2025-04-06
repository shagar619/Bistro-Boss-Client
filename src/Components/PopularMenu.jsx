
import SectionTitle from "./SectionTitle";
import MenuItem from "./MenuItem";
import useMenu from "../hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu();

    const popular = menu.filter(item => item.category === 'popular');








    return (
        <div className="w-10/12 mx-auto mb-32">

            <SectionTitle
            subHeading={"---Check it out---"}
            heading={"FROM OUR MENU"}>
            </SectionTitle>
            
            <div className="grid md:grid-cols-2 gap-8">
                {
                    popular.map(item => <MenuItem 
                        item={item}
                        key={item._id}></MenuItem>)
                }
            </div>

        </div>
    );
};

export default PopularMenu;