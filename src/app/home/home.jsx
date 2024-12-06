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

      <Products mockProducts={mockProducts} />
    </div>
  );
};

export default Home;
