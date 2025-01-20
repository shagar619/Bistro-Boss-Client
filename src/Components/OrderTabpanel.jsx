import FoodCard from "./FoodCard";


const OrderTabpanel = ({ items }) => {
    return (
        <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-16'>
                {
                    items.map(item => 
                        <FoodCard
                        key={item._id}
                        item={item}
                        ></FoodCard>
                    )
                }
        </div>
    );
};

export default OrderTabpanel;