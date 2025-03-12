/** @format */

import { Suspense } from 'react';

import { redirect } from 'next/navigation';

import ProductDetailImage from '@/app/products/ProductDetailImage';
import {
  PageProps,
  TSlug,
} from '@/interface/page';
import { TProduct } from '@/interface/product';
import sanityFetch from '@/sanity/client';
import Footer from '@/shared/Footer';
import Navbar from '@/shared/Navbar';
import SanityPortableText from '@/shared/SanityPortableText';

import ProductSkeleton from '../ProductSkeleton';
import GoBack from './GoBack';
import {
  FixedButton,
  StaticButton,
} from './WhatsappButton';

const PRODUCT_QUERY = `
  *[_type == "product" && slug.current == $slug][0]{
    _id,
    title,
    date,
    body,
    "image": image[].asset->url,
    category->{ value }
  }
`;

export async function generateStaticParams() {
  const products = await sanityFetch<TProduct[]>({
    query: `*[_type == "product"]{ slug }`,
  });

  return products.map((product) => ({
    slug: product.slug.current,
  }));
}

async function Product({ slug }: TSlug) {
  const product = await sanityFetch<TProduct>({
    query: PRODUCT_QUERY,
    params: { slug },
  });

  if (!product) {
    return redirect(`/not-found`);
  }

  return (
    <div className="outer-wrapper py-[36px] sm:px-[1rem]">
      <div className="inner-wrapper !items-start">
        <GoBack category={product.category.value} />
      </div>
      <div className="inner-wrapper mt-[20px] flex w-full !flex-row !items-start gap-8 sm:!flex-col">
        <h1 className="hidden text-[1.5rem] font-semibold sm:block">
          {product.title}
        </h1>
        <ProductDetailImage imageURL={product.image} />
        <div className="flex h-[698px] w-[50%] flex-col gap-3 sm:h-auto sm:w-full">
          <h1 className="text-[2.25rem] font-semibold sm:hidden">
            {product.title}
          </h1>
          <h2 className="text-n-700 text-[1rem] font-semibold">Description</h2>
          <div className="h-[520px] overflow-y-auto sm:h-auto">
            <SanityPortableText value={product.body} />
          </div>
          <StaticButton itemName={product.title} />
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
