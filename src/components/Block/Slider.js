import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider(props) {
    // const slides = props.options.map(item => {
    //     return <SwiperSlide className='mod__slide'>{item}</SwiperSlide>
    // })

    return (
        <>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                centeredSlides={true}
            >
                {/* {slides} */}
            </Swiper>
        </>
    );
}
