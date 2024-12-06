'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import introData from '@/data/introData';

export default function IntroSwiper() {
  // 슬라이드 인덱스를 추적하기 위한 state
  const [currentSlide, setCurrentSlide] = useState(0);

  console.log(`${introData[currentSlide]?.id}.png`);
  return (
    <div>
      <div
        className={`w-full relative intro-swiper bg-center bg-[url('/images/pattern/main/bg_mobile/bg_m_${introData[currentSlide]?.id}.png')] lg:bg-[url('/images/pattern/main/bg_pc/bg_pc_${introData[currentSlide]?.id}.png')]`}
      >
        {/* <div
        className={`w-full relative intro-swiper bg-center bg-[url('/images/pattern/main/bg_mobile/bg_m_1.png')] lg:bg-[url('/images/pattern/main/bg_pc/bg_pc_1.png')]`}
      > */}
        <div
          className="pt-10 md:pt-15 bg-tranperant text-white text-center font-extrabold 
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
              const bulletImages = introData.map((item) => item.bulletImage);
              return `
              <span class="${className}">
                <img
                src="${bulletImages[index]}" alt="slide ${index + 1}" />
              </span>
            `;
            },
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
          // 슬라이드가 변경될 때마다 currentSlide 상태를 업데이트
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        >
          {/* introData 배열을 map으로 돌며 각 슬라이드 생성 */}
          {introData.map((data) => (
            <SwiperSlide key={data.id} className="relative">
              {/* 모바일 뷰 */}
              <div className="lg:hidden absolute w-full h-full flex items-center justify-center">
                <img src={data.mobileImage} alt={`Mobile slide ${data.id}`} />
              </div>
              {/* 데스크탑 뷰 */}
              <div className="hidden lg:flex absolute w-full h-full items-center justify-center ">
                <img src={data.desktopImage} alt={`Desktop slide ${data.id}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
