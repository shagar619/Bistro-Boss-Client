import SectionTitle from "./SectionTitle";
import { FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://bistro-boss-server-ruddy-pi.vercel.app/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    } , [])

    return (
        <div className="mb-32">
            <SectionTitle
            subHeading={"---What Our Clients Say---"}
            heading={"TESTIMONIALS"}>
            </SectionTitle>

    <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper">

        {
            reviews.map(review => <SwiperSlide
            key={review._id}>
                <div className="my-24 w-10/12 mx-auto flex flex-col items-center">
                <Rating
                        style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly/>
                    <h3><FaQuoteLeft className="text-5xl font-bold my-12"></FaQuoteLeft></h3>
                    <p className="text-center text-[#444444] text-xl">{review.details}</p>
                    <h3 className="text-center text-[#CD9003] text-3xl mt-4">{review.name}</h3>
                </div>
            </SwiperSlide>)
        }

    </Swiper>
        </div>
    );
};

export default Testimonials;