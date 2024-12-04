import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/dubai.jpg'
import img2 from '../../assets/usa.jpg'
import img3 from '../../assets/uk.jpg'
import img4 from '../../assets/poland.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './banner.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="swiper-slide-content">
                        <img src={img1} />
                        <div className="text-content">
                            <h2>Title 1</h2>
                            <p>Neque porro quisquam  1.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-content">
                        <img src={img2} />
                        <div className="text-content">
                            <h2>Title 2</h2>
                            <p>Neque porro quisquam  2.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-content">
                        <img src={img3} />
                        <div className="text-content">
                            <h2>Title 3</h2>
                            <p>Neque porro quisquam  3.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-content">
                        <img src={img4} />
                        <div className="text-content">
                            <h2>Title 4</h2>
                            <p>Neque porro quisquam  4.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>

    );
};

export default Banner;