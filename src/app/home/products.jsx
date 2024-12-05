import { Section } from '@/components/layout/Main';
import { AspectRatio, Container, SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Products = ({ mockProducts }) => {
  return (
    <Section title="Products">
      <ul className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-10 md:gap-20 ">
        {mockProducts.map((product, index) => (
          <a href="#" key={index} className="relative flex flex-col">
            <AspectRatio ratio={1 / 1.74}>
              <Image src={product.imageUrl} alt={product.title} width={317} height={550} />
            </AspectRatio>
            <div
              className="flex flex-col w-full h-full absolute text-center px-2
            opacity-0 hover:opacity-100 justify-center bg-black/50 text-white rounded-2xl"
            >
              <strong className="block text-2xl font-semibold">BE@R BRICK</strong>
              <strong className="block text-lg font-medium mt-2">{product.title}</strong>
              <p className="font-light text-sm">{product.content}</p>
              <span className="mt-1 text-sm text-gray-400">{product.price}</span>
            </div>
          </a>
        ))}
      </ul>
      {/* <SimpleGrid as="ul" columns={[1, null, 2, 3, 4]} gap="40px">
        {mockNews.map((news, index) => (
          <li key={index}>
            <AspectRatio ratio={1 / 1}>
              <Image
                src={news.imageUrl}
                alt={news.title}
                width={317}
                height={550}
                className="w-full h-50 rounded-lg mb-4"
              />
            </AspectRatio>
            <strong className="block text-lg font-semibold mt-5">{news.title}</strong>
            <p className="mt-1">{news.content}</p>
            <span className="text-sm text-gray-400">{news.date}</span>
          </li>
        ))}
      </SimpleGrid> */}
    </Section>
  );
};

export default Products;
