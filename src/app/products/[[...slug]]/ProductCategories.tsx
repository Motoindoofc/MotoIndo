/** @format */

import { Suspense } from "react";

import Link from "next/link";

import sanityFetch from "@/sanity/client";
import { SanityDocument } from "@sanity/client";

import ProductCard from "../ProductCard";
import ProductSkeletons from "../ProductSkeletons";

interface TRoutes {
  id: string;
  href: string;
  name: string;
}

interface TCategory {
  category: TRoutes;
}

const CATEGORIES_QUERY = `*[_type == "category"]{_id, value, name, date}|order(date asc)`;

const PRODUCTS_QUERY = `*[_type == "product" && ($category == "" || category._ref == $category)]{_id, title, slug, category, preview, "image":image[].asset->url}|order(date desc)`;

async function ProductList({ category }: TCategory) {
  const products = await sanityFetch<SanityDocument[]>({
    query: PRODUCTS_QUERY,
    params: { category: category.id },
  });

  return (
    <div className="inner-wrapper min-h-[500px] flex items-center justify-start">
      <div className="w-[1216px] max-w-full flex flex-wrap gap-8">
        {products.length === 0 ? (
          <div>No product yet</div>
        ) : (
          <div className="flex gap-16">
            {products.map((product) => (
              <ProductCard key={product._id} data={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default async function ProductCategories({
  currentCategory,
}: {
  currentCategory: string;
}) {
  const categoriesFetch = await sanityFetch<SanityDocument[]>({
    query: CATEGORIES_QUERY,
  });

  const formattedCategories: TRoutes[] = categoriesFetch.map((category) => ({
    id: category._id,
    href: `/${category.value}`,
    name: category.name,
  }));

  const categories: TRoutes[] = [
    {
      id: "",
      href: "",
      name: "Semua Produk",
    },
    ...formattedCategories,
  ];

  let currentFormattedCategory: TRoutes = categories.find(
    (category) => category.href.replace("/", "") === currentCategory
  ) as TRoutes;

  if (!currentFormattedCategory) {
    currentCategory = "";
    currentFormattedCategory = categories.find(
      (category) => category.href.replace("/", "") === ""
    ) as TRoutes;
  }

  return (
    <>
      <div className="outer-wrapper">
        <div
          className="mt-[48px] h-[76px] py-[12px] px-[64px] w-[1180px] bg-n-100 flex justify-center items-center rounded-xl gap-16"
          style={{
            boxShadow: "0px 5px 12px 2px rgba(0, 0, 0, 0.08)",
          }}>
          {categories.map((category, i) => (
            <Link
              key={i}
              href={`/products${category.href}`}
              className={`cursor-pointer h-[52px] py-[16px] px-[24px] rounded-lg font-semibold uppercase ${
                currentCategory === category.href.replace("/", "")
                  ? "bg-b-500 text-n-100"
                  : "text-n-700"
              }`}
              scroll={false}>
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
