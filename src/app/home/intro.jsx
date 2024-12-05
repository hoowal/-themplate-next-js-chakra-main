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
    <div className="w-full relative intro-swiper">
      <div
        className="pt-10 md:pt-15 bg-black text-white text-center font-extrabold 
      text-5xl md:text-6xl lg:text-7xl"
      >
        NEW ARRIVAL
      </div>
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
              lg:hidden absolute w-full h-full
              flex items-center justify-center"
            >
              <img src={`/images/pattern/main/info_mobile/${num}.png`} />
            </div>
            <div
              className="hidden overflow-hidden
            lg:flex absolute w-full h-full
             items-center justify-center
            "
            >
              <p
                className="pt-32
                text-white
              pl-10 top-64 text-left
              "
              >
                ※数量限定販売となります。 <br />
                万が一品切れの場合はご容赦ください。
                <br />
                『MEDICOM TOY EXHIBITION 2024』 <br />
                会場：スペース オー［表参道ヒルズ 本館地下3F］ <br />
                場所：東京都渋谷区神宮前4-12-10 期<br />
                間：2024年7月23日(火)～2024年7月28日(日)
                <br />
                ※会期中無休 時間：11:00～20:00
                <br />
                ※入場は閉場30分前まで
              </p>
              <img src={`/images/pattern/main/info_pc/${num}.png`} />
              <p
                className="pb-48
               text-white
              pr-10 top-20 text-right
              "
              >
                ※数量限定販売となります。 <br />
                万が一品切れの場合はご容赦ください。
                <br />
                『MEDICOM TOY EXHIBITION 2024』 <br />
                会場：スペース オー［表参道ヒルズ 本館地下3F］ <br />
                場所：東京都渋谷区神宮前4-12-10 期<br />
                間：2024年7月23日(火)～2024年7月28日(日)
                <br />
                ※会期中無休 時間：11:00～20:00
                <br />
                ※入場は閉場30分前まで
              </p>
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
