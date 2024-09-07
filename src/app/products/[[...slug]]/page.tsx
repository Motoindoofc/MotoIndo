/** @format */

import { PageProps } from "@/interface/page";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";

import ProductCategories from "./ProductCategories";

export default function Products({ params }: PageProps) {
  const currentCategory = params?.slug?.[0] || "";

  return (
    <section>
      <Navbar />
      <div className="outer-wrapper product-hero h-[28rem]">
        <div className="flex h-full w-full justify-center px-[96px] py-[108px] sm:p-[1.5rem]">
          <div className="flex w-[1440px] items-start justify-between gap-6 sm:max-w-full">
            <div className="flex flex-col gap-8 sm:gap-6">
              <h1 className="text-n-900 text-[4rem] font-bold leading-tight sm:text-[2rem]">
                Dapatkan penawaran <br /> menarik di{" "}
                <span className="text-b-600">MotoIndo</span>
              </h1>
              <p className="text-n-900 text-[1.5rem] sm:text-[0.875rem]">
                MotoIndo menjamin semua produk Motorola original,{" "}
                <br className="sm:hidden" />
                dapatkan lini produk terbaru dengan harga kompetitif.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ProductCategories currentCategory={currentCategory} />
      <Footer />
    </section>
  );
}
