'use client';
import React from 'react';
import IntroSwiper from './intro';
import { mockProducts } from '@/data/productsData';
import Header from '@/components/layout/header/Header';
import Products from './products';

const Home = () => {
  return (
    <div id="root">
      <IntroSwiper />
      {/* news */}
      <Products mockProducts={mockProducts} />
      {/* stock */}
    </div>
  );
};

export default Home;
