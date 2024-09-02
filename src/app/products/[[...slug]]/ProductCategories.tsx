/** @format */

import { Suspense } from "react";

import Link from "next/link";

import sanityFetch from "@/sanity/client";
import { SanityDocument } from "@sanity/client";

import ProductCard from "../ProductCard";
import ProductSkeletons from "../ProductSkeletons";

// Define the custom types based on your Sanity data structure
interface TRoutes {
  id: string;
  href: string;
  name: string;
}

interface TCategory {
  id: string;
  href: string;
  name: string;
}

export interface Product {
  _id: string;
  slug: { current: string };
  title: string;
  preview: string;
  image: string[];
}

const CATEGORIES_QUERY = `*[_type == "category"]{_id, value, name, date}|order(date asc)`;

const PRODUCTS_QUERY = `*[_type == "product" && ($category == "" || category._ref == $category)]{_id, title, slug, category, preview, "image":image[].asset->url}|order(date desc)`;

async function ProductList({ category }: { category: TCategory }) {
  const products = await sanityFetch<Product[]>({
    query: PRODUCTS_QUERY,
    params: { category: category.id || "" },
  });

  return (
    <div className="inner-wrapper min-h-[500px] flex items-center justify-start sm:!justify-center sm:px-[0.5rem]">
      <div className="w-[1216px] max-w-full flex flex-wrap sm:w-full sm:justify-center">
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

export default async function ProductCategories({
  currentCategory,
}: {
  currentCategory: string;
}) {
  const categoriesFetch = await sanityFetch<SanityDocument[]>({
    query: CATEGORIES_QUERY,
  });

  const formattedCategories: TRoutes[] = categoriesFetch.map((category) => ({
    id: category._id || "",
    href: `/${category.value || ""}`,
    name: category.name || "Unnamed Category",
  }));

  const categories: TRoutes[] = [
    {
      id: "",
      href: "",
      name: "Semua Produk",
    },
    ...formattedCategories,
  ];

  let currentFormattedCategory: TRoutes =
    categories.find(
      (category) => category.href.replace("/", "") === currentCategory
    ) || categories[0]; // Default to the first category if none match

  return (
    <>
      <div className="outer-wrapper sm:px-[1rem]">
        <div
          className="mt-[48px] h-[76px] py-[12px] px-[64px] w-[1180px] bg-n-100 rounded-xl gap-16
          flex items-center justify-between sm:px-[1rem] sm:w-full sm:h-auto
          sm:grid sm:grid-cols-2 sm:gap-4"
          style={{
            boxShadow: "0px 5px 12px 2px rgba(0, 0, 0, 0.08)",
          }}>
          {categories.map((category, i) => (
            <Link
              key={i}
              href={`/products${category.href}`}
              className={`cursor-pointer h-[52px] py-[16px] px-[24px] rounded-lg font-semibold uppercase sm:w-auto sm:text-[0.75rem] sm:h-auto sm:py-[0.5rem] ${
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
