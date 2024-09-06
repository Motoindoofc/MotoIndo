/** @format */

import { Suspense } from "react";

import Image from "next/image";
import { redirect } from "next/navigation";

import ProductDetailImage from "@/app/products/ProductDetailImage";
import WAIcon from "@/assets/icons/wa-icon-white.svg";
import { PageProps, TSlug } from "@/interface/page";
import { TProduct } from "@/interface/product";
import sanityFetch from "@/sanity/client";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import SanityPortableText from "@/shared/SanityPortableText";

import ProductSkeleton from "../ProductSkeleton";
import FixedButton from "./FixedButton";
import GoBack from "./GoBack";

const PRODUCT_QUERY = `*[_type == "product" && slug.current == $slug][0]{_id,  title, date, body, "image":image[].asset->url, category->{value}}`;

async function Product({ slug }: TSlug) {
  const product = await sanityFetch<TProduct>({
    query: PRODUCT_QUERY,
    params: { slug },
  });

  if (!product) {
    return redirect(`/not-found`);
  }

  return (
    <div className="py-[36px] outer-wrapper sm:px-[1rem]">
      <div className="inner-wrapper !items-start">
        <GoBack category={product.category.value} />
      </div>
      <div className="inner-wrapper mt-[20px] !flex-row !items-start flex gap-8 w-full sm:!flex-col">
        <h1 className="hidden sm:block font-semibold text-[1.5rem]">
          {product.title}
        </h1>
        <ProductDetailImage imageURL={product.image} />
        <div className="w-[50%] h-[698px] flex flex-col gap-3 sm:w-full sm:h-auto">
          <h1 className="font-semibold text-[2.25rem] sm:hidden">
            {product.title}
          </h1>
          <h2 className="font-semibold text-n-700 text-[1rem]">Description</h2>
          <div className="h-[520px] overflow-y-auto sm:h-auto">
            <SanityPortableText value={product.body} />,
          </div>
          <button className="rounded-lg h-[72px] text-[1.25rem] py-[18px] text-n-100 font-semibold w-full flex items-center justify-center bg-[#0EA46D] gap-3 sm:hidden">
            <Image src={WAIcon} alt="wa-icon" /> Order Via Whatsapp
          </button>
          <FixedButton itemName={product.title} />
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail({ params }: PageProps) {
  return (
    <section>
      <Navbar />
      <Suspense fallback={<ProductSkeleton />}>
        <Product slug={params.slug} />
      </Suspense>
      <Footer />
    </section>
  );
}
