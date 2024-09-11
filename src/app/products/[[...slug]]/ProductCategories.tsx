/** @format */

import { Suspense } from 'react';

import Link from 'next/link';

import { TString } from '@/interface/page';
import {
  TCategory,
  TProduct,
  TRoutes,
} from '@/interface/product';
import sanityFetch from '@/sanity/client';

import ProductCard from '../ProductCard';
import ProductSkeletons from '../ProductSkeletons';

const CATEGORIES_QUERY = `*[_type == "category"]{_id, value, name, date}|order(date asc)`;

const PRODUCTS_QUERY = `*[_type == "product" && ($category == "" || category._ref == $category)]{_id, title, slug, category, preview, "image":image[].asset->url}|order(date asc)`;

async function ProductList({ category }: { category: TRoutes }) {
  const products = await sanityFetch<TProduct[]>({
    query: PRODUCTS_QUERY,
    params: { category: category._id === "all" ? "" : category._id },
  });

  return (
    <div className="inner-wrapper flex min-h-[500px] items-center justify-start sm:!justify-center sm:px-[0.5rem]">
      <div className="flex w-[1216px] max-w-full flex-wrap sm:w-full sm:justify-center">
        {products.length === 0 ? (
          <div>No product yet</div>
        ) : (
          <div className="flex flex-wrap gap-8 sm:grid sm:grid-cols-2 sm:gap-4">
            {products.map((product) => (
              <ProductCard key={product._id} data={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default async function ProductCategories({ currentCategory }: TString) {
  const categoriesFetch = await sanityFetch<TCategory[]>({
    query: CATEGORIES_QUERY,
  });

  const formattedCategories: TRoutes[] = categoriesFetch.map((category) => ({
    _id: category._id || "",
    href: `/${category.value || ""}`,
    name: category.name || "Unnamed Category",
  }));

  const categories: TRoutes[] = [
    {
      _id: "all",
      href: "",
      name: "Semua Produk",
    },
    ...formattedCategories,
  ];

  let currentFormattedCategory: TRoutes =
    categories.find(
      (category) => category.href.replace("/", "") === currentCategory,
    ) || categories[0];

  return (
    <>
      <div className="outer-wrapper sm:px-[1rem]">
        <div
          className="bg-n-100 mt-[48px] flex h-[76px] w-[1180px] items-center justify-between gap-16 rounded-xl px-[64px] py-[12px] sm:grid sm:h-auto sm:w-full sm:grid-cols-2 sm:gap-4 sm:px-[1rem]"
          style={{
            boxShadow: "0px 5px 12px 2px rgba(0, 0, 0, 0.08)",
          }}
        >
          {categories.map((category, i) => (
            <Link
              key={i}
              href={`/products${category.href}`}
              className={`h-[52px] cursor-pointer rounded-lg px-[24px] py-[16px] font-semibold uppercase sm:h-auto sm:w-auto sm:py-[0.5rem] sm:text-[0.75rem] ${
                currentCategory === category.href.replace("/", "")
                  ? "bg-b-500 text-n-100"
                  : "text-n-700"
              }`}
              scroll={false}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="outer-wrapper pt-[64px]">
        <Suspense fallback={<ProductSkeletons />}>
          <ProductList category={currentFormattedCategory} />
        </Suspense>
      </div>
    </>
  );
}
