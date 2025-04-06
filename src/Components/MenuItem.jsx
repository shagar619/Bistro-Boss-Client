

const MenuItem = ({ item }) => {

    const { image, price, recipe, name } = item;

    return (
        <div className="w-10/12 mx-auto">
        <div className="flex items-center gap-8">
            <div>
                <img 
                style={{borderRadius: '0 180px 180px 180px'}}
                className="w-[150px] h-[104px]" src={image} alt="" />
            </div>
            <div className="space-y-2">
                <h3 className="uppercase text-[#151515] text-xl">{name}--------</h3>
                <p className="text-[#737373] text-base">{recipe.slice(0, 65)}......</p>
            </div>
            <div>
                <h4 className="text-[#BB8506] text-xl">$ {price}</h4>
            </div>
        </div>
        </div>
    );
};

export default MenuItem;