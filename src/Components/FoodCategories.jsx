

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

import slide1 from '../assets/home/slide1.jpg';
import slide2 from '../assets/home/slide2.jpg';
import slide3 from '../assets/home/slide3.jpg';
import slide4 from '../assets/home/slide4.jpg';
import slide5 from '../assets/home/slide5.jpg';
import SectionTitle from './SectionTitle';

const FoodCategories = () => {
    return (
        <div className='my-24'>

        <SectionTitle 
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
        >
        </SectionTitle>    

<Swiper
        slidesPerView={5}
        spaceBetween={10}
        freeMode={true}
        pagination={{
            clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-24">
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className='text-4xl uppercase text-white text-center -mt-2'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className='text-4xl uppercase text-white text-center -mt-16'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className='text-4xl uppercase text-white text-center -mt-16'>Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className='text-4xl uppercase text-white text-center -mt-16'>Deserts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className='text-4xl uppercase text-white text-center -mt-16'>Salads</h3>
        </SwiperSlide>

        <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className='text-4xl uppercase text-white text-center -mt-16'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className='text-4xl uppercase text-white text-center -mt-16'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className='text-4xl uppercase text-white text-center -mt-16'>Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className='text-4xl uppercase text-white text-center -mt-16'>Deserts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className='text-4xl uppercase text-white text-center -mt-16'>Salads</h3>
        </SwiperSlide>

        </Swiper>
            
        </div>
    );
};

export default FoodCategories;