/** @format */

import Link from "next/link";

import { ProductCardProps } from "@/interface/product";
import ImageLoader from "@/shared/ImageLoader";

export default function ProductCard({ data }: ProductCardProps) {
  return (
    <Link
      href={`/product/${data.slug.current}`}
      className="bg-n-100 h-[320px] w-[280px] cursor-pointer overflow-hidden rounded-2xl sm:w-auto"
      style={{
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.06)",
      }}>
      <ImageLoader
        className="h-[200px] w-full object-contain"
        width={400}
        height={400}
        imageURL={data.image[0]}
      />
      <div className="flex flex-col gap-[12px] px-[16px] py-[24px]">
        <h1 className="line-clamp-2 text-[1rem] font-semibold">{data.title}</h1>
        <p className="line-clamp-1 text-[1rem]">{data.preview}</p>
      </div>
    </Link>
  );
}
