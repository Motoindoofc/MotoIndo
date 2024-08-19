/** @format */

import { Suspense } from "react";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import ProductDetailImage from "@/app/products/ProductDetailImage";
import ChevronLeft from "@/assets/icons/chevron-left.svg";
import WAIcon from "@/assets/icons/wa-icon-white.svg";
import sanityFetch from "@/sanity/client";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import SanityPortableText from "@/shared/SanityPortableText";
import { SanityDocument } from "@sanity/client";

interface IProductDetail {
  params: { slug: string };
}

const PRODUCT_QUERY = `*[_type == "product" && slug.current == $slug][0]{_id,  title, date, body, "image":image[].asset->url, category->{value}}`;

async function Product({ slug }: { slug: string }) {
  const product: any = await sanityFetch<SanityDocument[]>({
    query: PRODUCT_QUERY,
    params: { slug },
  });

  if (!product) {
    return redirect(`/products`);
  }

  return (
    <div className="py-[36px] outer-wrapper">
      <div className="inner-wrapper !items-start">
        <Link
          className="flex items-center font-semibold  gap-2 text-[1.25rem] text-b-600"
          href={`/products/${product.category.value}`}>
          <Image src={ChevronLeft} alt="cheveon-left" />
          Kembali ke halaman Produk
        </Link>
      </div>
      <div className="inner-wrapper mt-[20px] !flex-row !items-start flex gap-8 w-full ">
        <ProductDetailImage imageURL={product.image} />
        <div className="w-[50%] h-[698px] flex flex-col gap-3">
          <h1 className="font-semibold text-[2.25rem]">{product.title}</h1>
          <h2 className="font-semibold text-n-700 text-[1rem]">Description</h2>
          <div className="h-[520px]  overflow-y-auto">
            <SanityPortableText value={product.body} />,
          </div>
          <button className="rounded-lg h-[72px] text-[1.25rem] text-n-100 font-semibold w-full flex items-center justify-center bg-[#0EA46D] gap-3">
            <Image src={WAIcon} alt="wa-icon" /> Order Via Whatsapp
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail({ params }: IProductDetail) {
  return (
    <section>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Product slug={params.slug} />
      </Suspense>
      <Footer />
    </section>
  );
}
