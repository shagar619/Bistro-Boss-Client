

const MenuItem = ({ item }) => {

    const { image, price, recipe, name } = item;

    return (
        <div className="flex items-center gap-8">
            <div>
                <img 
                style={{borderRadius: '0 200px 200px 200px'}}
                className="w-[118px] h-[104px]" src={image} alt="" />
            </div>
            <div className="space-y-2">
                <h3 className="uppercase text-[#151515] text-xl">{name}--------------</h3>
                <p className="text-[#737373] text-base">{recipe}</p>
            </div>
            <div>
                <h4 className="text-[#BB8506] text-xl">$ {price}</h4>
            </div>
        </div>
    );
};

export default MenuItem;