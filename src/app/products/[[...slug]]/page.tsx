/** @format */

import ProductBackground from "@/assets/images/product-hero-img.jpg";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";

import ProductCategories from "./ProductCategories";

interface IProducts {
  params: { slug: string[] };
}

export default function Products({ params }: IProducts) {
  const currentCategory = params?.slug?.[0] || "";

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
      <ProductCategories currentCategory={currentCategory} />
      <Footer />
    </section>
  );
}
