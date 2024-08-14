/** @format */

import Image from 'next/image';
import Link from 'next/link';

import ChevronLeft from '@/assets/icons/chevron-left.svg';
import WAIcon from '@/assets/icons/wa-icon-white.svg';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import ProductDetailImage from '@/components/ui/ProductDetailImage';
import { ProductDummyDescription } from '@/data';

export default function ProductDetail() {
  return (
    <section>
      <Navbar />
      <div className="py-[36px] outer-wrapper">
        <div className="inner-wrapper !items-start">
          <Link
            className="flex items-center font-semibold  gap-2 text-[1.25rem] text-b-600"
            href="/products">
            <Image src={ChevronLeft} alt="cheveon-left" />
            Kembali ke halaman Produk
          </Link>
        </div>
        <div className="inner-wrapper mt-[20px] !flex-row !items-start flex gap-8 w-full ">
          <ProductDetailImage />
          <div className="w-[50%] h-[698px] flex flex-col gap-3">
            <h1 className="font-semibold text-[2.25rem]">
              Radiohead OCAB290 2023
            </h1>
            <h2 className="font-semibold text-n-700 text-[1rem]">
              Description
            </h2>
            <div className="h-[520px]  overflow-y-auto">
              <p className="text-[1rem]">{ProductDummyDescription}</p>
            </div>
            <button className="rounded-lg h-[72px] text-[1.25rem] text-n-100 font-semibold w-full flex items-center justify-center bg-[#0EA46D] gap-3">
              <Image src={WAIcon} alt="wa-icon" /> Order Via Whatsapp
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
