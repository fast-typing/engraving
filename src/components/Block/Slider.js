import React from "react";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Slider({ subModif }) {
    const options = ['волки', 'лиса', 'заяц', 'медведь']
    console.log(subModif)

    const slides = options.map(item => {
        return <SwiperSlide className='mod__slide'>{item}</SwiperSlide>
    })

    return (
        <>
            <h2>
                {subModif['parentName'] + ' - ' + subModif['name']}
            </h2>
            <Swiper
                navigation={true}
                pagination={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {slides}
            </Swiper>
        </>
    );
}
