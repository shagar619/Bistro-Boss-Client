import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import RecommendItem from "./RecommendItem";


const ChefRecommends = () => {

    const [recommend, setRecommend] = useState([]);

    useEffect(() => {
        fetch('./Menu.json')
        .then(res => res.json())
        .then(data => {
            const recommendData = data.filter(item => item.category === 'salad');
            setRecommend(recommendData);
        })
    } , [])

    return (
        <div className="w-10/12 mx-auto mb-32">

            <SectionTitle
            subHeading={"---Should Try---"}
            heading={"CHEF RECOMMENDS"}>
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    recommend.map(item => <RecommendItem 
                        key={item._id}
                        item={item}>
                        </RecommendItem>)
                }
            </div>
            
        </div>
    );
};

export default ChefRecommends;