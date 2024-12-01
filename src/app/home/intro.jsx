"use client";
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./intro.css";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

export default function IntroSwiper() {
  return (
    <div className="w-full h-[80vh]">
      <Swiper
        direction={"vertical"}
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
              "/images/pattern/main/head/1.png",
              "/images/pattern/main/head/2.png",
              "/images/pattern/main/head/3.png",
              "/images/pattern/main/head/4.png",
              "/images/pattern/main/head/5.png",
              "/images/pattern/main/head/6.png",
              "/images/pattern/main/head/7.png",
            ];
            return `
              <span class="${className}">
                <img src="${images[index]}" alt="slide ${index + 1}" />
              </span>
            `;
          },
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/pattern/main/info_mobile/1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/pattern/main/info_mobile/2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/pattern/main/info_mobile/3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/pattern/main/info_mobile/4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/pattern/main/info_mobile/5.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/pattern/main/info_mobile/6.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
