/** @format */

import Image from 'next/image';
import Link from 'next/link';

import ProductImg from '@/assets/images/product-img.png';

export default function ProductCard() {
  return (
    <Link
      href={"/products/:slug"}
      className="cursor-pointer rounded-2xl w-[280px] h-[320px] bg-n-100 overflow-hidden"
      style={{
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.06)",
      }}>
      <Image className="" src={ProductImg} alt="product-img" />
      <div className="py-[24px] px-[16px] flex flex-col gap-[12px]">
        <h1 className="text-[1rem] font-semibold line-clamp-2">
          Radiohead OCAB290 2023 Radiohead OCAB290 2023 Radiohead OCAB290 2023
        </h1>
        <p className="text-[1rem] line-clamp-1">
          Detail Product 1 line Detail Product 1 line
        </p>
      </div>
    </Link>
  );
}
