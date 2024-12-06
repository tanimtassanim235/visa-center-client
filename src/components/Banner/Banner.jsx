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
                            <h2 className='font-bold text-green-600 md:text-5xl'>UAE</h2>
                            <p className='text-gray-500  md:text-3xl py-2'>80% Expat Population from 200+ Nationalities</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-content">
                        <img src={img2} />
                        <div className="text-content">
                            <h2 className='font-bold text-green-600 md:text-5xl'>USA</h2>
                            <p className='text-gray-500  md:text-3xl py-2'>World largest GDP Country</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-content">
                        <img src={img3} />
                        <div className="text-content">
                            <h2 className='font-bold text-fuchsia-600 md:text-5xl'>UK</h2>
                            <p className='text-gray-500  md:text-3xl py-2'>Standing Position 4 with 9.4M Immigrants </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-content">
                        <img src={img4} />
                        <div className="text-content">
                            <h2 className='font-bold text-orange-600 md:text-5xl'>Poland</h2>
                            <p className='text-gray-500  md:text-2xl py-2'>As of 2024, the student visa success rate in Poland is approximately <span className='font-black text-red-700'>95%.</span></p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>

    );
};

export default Banner;