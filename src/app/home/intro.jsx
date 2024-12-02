'use client';
import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

export default function IntroSwiper() {
  return (
    <div className="w-full h-[90vh] relative intro-swiper">
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        speed={0}
        loop={true}
        allowTouchMove={true}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            // 이미지 URL을 설정하고, 각 페이지 버튼에 적용
            const images = [
              '/images/pattern/main/head/1.png',
              '/images/pattern/main/head/2.png',
              '/images/pattern/main/head/3.png',
              '/images/pattern/main/head/4.png',
              '/images/pattern/main/head/5.png',
              '/images/pattern/main/head/6.png',
              '/images/pattern/main/head/7.png',
            ];
            return `
              <span class="${className}">
                <img
                src="${images[index]}" alt="slide ${index + 1}" />
              </span>
            `;
          },
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <SwiperSlide key={num} className="relative">
            <div
              className="
              lg:hidden absolute w-full h-full max-w-xl"
            >
              <img src={`/images/pattern/main/info_mobile/${num}.png`} />
            </div>
            <div
              className=" hidden
            lg:block absolute w-full h-full max-w-7xl"
            >
              <img src={`/images/pattern/main/info_pc/${num}.png`} />
            </div>
          </SwiperSlide>
        ))}

        {/* {[1, 2, 3, 4, 5, 6].map((num) => (
          <SwiperSlide key={num} className="relative">
            <img
              src=""
              className={`absolute object-cover bg-cover bg-center w-full h-full 
        lg:hidden bg-[url('/images/pattern/main/info_mobile/${num}.png')] max-w-xl`}
            />
            <img
              className={`absolute bg-cover bg-center w-full h-full aspect-[16/9] 
        lg:bg-[url('/images/pattern/main/info_pc/${num}.png')] max-w-7xl`}
            />
          </SwiperSlide>
        ))} */}
      </Swiper>
    </div>
  );
}
