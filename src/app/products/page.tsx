/** @format */
"use client";

import { useState } from 'react';

import ProductBackground from '@/assets/images/product-hero-img.jpg';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import ProductCard from '@/components/ui/ProductCard';

interface TTypes {
  id: number;
  name: string;
}

export default function Products() {
  const types: TTypes[] = [
    {
      id: 1,
      name: "semua produk",
    },
    {
      id: 2,
      name: "Handy Talky (HT)",
    },
    {
      id: 3,
      name: "Rig-Base",
    },
    {
      id: 4,
      name: "Repeater",
    },
    {
      id: 5,
      name: "aksesoris",
    },
  ];

  const [selectedType, setSelectedType] = useState(types[0]);

  const onSelectType = (typeId: number) => {
    const newType = types.find((type) => type.id === typeId);
    setSelectedType(newType as TTypes);
  };

  return (
    <section>
      <Navbar />
      <div
        className="outer-wrapper h-[28rem]"
        style={{
          backgroundImage: `url(${ProductBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
        }}>
        <div className="w-full h-full py-[108px] px-[96px] flex justify-center">
          <div className="w-[1440px] flex justify-between items-center gap-6">
            <div className="flex flex-col gap-8">
              <h1 className="text-n-900 font-bold text-[4rem] leading-tight">
                Dapatkan penawaran <br /> menarik di{" "}
                <span className="text-b-600">MotoIndo</span>
              </h1>
              <p className="text-n-900 text-[1.5rem]">
                MotoIndo menjamin semua produk Motorola original, <br />
                dapatkan lini produk terbaru dengan harga kompetitif.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="outer-wrapper">
        <div
          className="mt-[48px] h-[76px] py-[12px] px-[64px] w-[1180px] bg-n-100 flex justify-center items-center rounded-xl gap-16"
          style={{
            boxShadow: "0px 5px 12px 2px rgba(0, 0, 0, 0.08)",
          }}>
          {types.map((type, i) => (
            <div
              key={i}
              className={`cursor-pointer h-[52px] py-[16px] px-[24px] rounded-lg font-semibold uppercase ${
                selectedType.id === type.id
                  ? "bg-b-500 text-n-100"
                  : "text-n-700"
              }`}
              onClick={() => onSelectType(type.id)}>
              {type.name}
            </div>
          ))}
        </div>
      </div>
      <div className="outer-wrapper pt-[64px]">
        <div className="inner-wrapper flex items-center justify-center">
          <div className="w-[1216px] max-w-full flex flex-wrap gap-8">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
