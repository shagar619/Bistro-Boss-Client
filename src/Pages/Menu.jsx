import { Helmet } from "react-helmet-async";
import Cover from "../Components/Cover";
import menuImg from './../assets/menu/banner3.jpg';
import desertImg from './../assets/menu/dessert-bg.jpeg';
import pizzaImg from './../assets/menu/pizza-bg.jpg';
import saladImg from './../assets/menu/pizza-bg.jpg';
import soupImg from './../assets/menu/soup-bg.jpg';
import useMenu from "../hooks/useMenu";
import SectionTitle from "../Components/SectionTitle";
import MenuCategories from "../Components/MenuCategories";



const Menu = () => {

    const [menu] = useMenu();

    const deserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            <Cover 
            title={'Our Menu'}
            subTitle={'Would you like to try a dish?'}
            img={menuImg}>
            </Cover>

            {/* main cover */}

            <SectionTitle
            subHeading={"---Don't miss---"}
            heading={"TODAY'S OFFER"}
            ></SectionTitle>

            {/* offered menu items */}

            <MenuCategories items={offered}></MenuCategories>

            {/* desert menu items */}

            <MenuCategories
            coverImg={desertImg}
            items={deserts}
            title={"Deserts"}
            subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategories>

            {/* pizza menu items */}

            <MenuCategories
            coverImg={pizzaImg}
            items={pizza}
            title={"Pizza"}
            subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategories>

            {/* salad menu items */}

            <MenuCategories
            coverImg={saladImg}
            items={salad}
            title={"Salad"}
            subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategories>

            {/* soups menu items */}

            <MenuCategories
            coverImg={soupImg}
            items={soup}
            title={"Soups"}
            subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategories>

        </div>
    );
};

export default Menu;