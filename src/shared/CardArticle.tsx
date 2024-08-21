/** @format */

import Link from "next/link";

import ImageLoader from "./ImageLoader";

export default function CardArticle({ data }: any) {
  return (
    <Link
      href={`/services/${data.slug.current}`}
      className="cursor-pointer rounded-2xl overflow-hidden	w-[360px] h-[460px]"
      style={{ boxShadow: "0px 4px 25.1px 0px rgba(0, 0, 0, 0.09)" }}>
      <ImageLoader
        imageURL={data.mainImage}
        alt={data.title}
        width={400}
        height={400}
        className="h-[260px] w-full object-cover"
      />
      <p className="p-[24px] text-n-800 text-[1.5rem] font-semibold">
        {data.title}
      </p>
    </Link>
  );
}
