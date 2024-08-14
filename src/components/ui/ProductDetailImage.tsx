/** @format */
"use client";

import Image from 'next/image';

/** @format */
import ProductImg from '@/assets/images/article-1-img.jpg';

export default function ProductDetailImage() {
  return (
    <div className="w-[50%] flex flex-col gap-4">
      <Image
        src={ProductImg}
        alt="product-img"
        className="w-full h-[560px] object-cover object rounded-3xl"
      />
      <div className="flex gap-3 items-stretch justify-between">
        {[...Array(5)].map((_, index) => (
          <Image
            src={ProductImg}
            alt="product-img"
            className="w-full h-full object-center object-cover overflow-hidden rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
