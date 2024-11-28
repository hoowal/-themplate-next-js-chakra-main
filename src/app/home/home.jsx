'use client';
import React from 'react';
import IntroSwiper from './intro';
import News from './news';
import { mockNews } from '@/data/newsData';

const Home = () => {
  return (
    <div id="root">
      <div>NEW ARRIVAL</div>
      <IntroSwiper />
      {/* news */}
      <News mockNews={mockNews} />
      {/* stock */}
    </div>
  );
};

export default Home;
