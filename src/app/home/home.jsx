'use client';
import React from 'react';
import IntroSwiper from './intro';
import News from './news';
import { mockNews } from '@/data/newsData';
import Header from '@/components/layout/header/Header';

const Home = () => {
  return (
    <div id="root">
      <IntroSwiper />
      {/* news */}
      <News mockNews={mockNews} />
      {/* stock */}
    </div>
  );
};

export default Home;
