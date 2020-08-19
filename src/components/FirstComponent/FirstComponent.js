import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import  './FirstComponent.css';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const options = {
    options: {
        autoplay: true,
        loop: true,
        navigation: true,
        height: 200,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            990: {
                slidesPerView: 3,
            },
        },
    }
};

const FisrtComponent = () => {
    return (
        <div className={'carouselWrapper'}>
            <Swiper {...options.options}
                spaceBetween={50}
                slidesPerView={3}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>

    )
};

export default FisrtComponent;