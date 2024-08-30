/** @format */

import Link from 'next/link';

import ImageLoader from '@/shared/ImageLoader';

export default function ProductCard({ data }: any) {
  return (
    <Link
      href={`/product/${data.slug.current}`}
      className="cursor-pointer rounded-2xl w-[280px] h-[320px] bg-n-100 overflow-hidden sm:w-[168px]"
      style={{
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.06)",
      }}>
      <ImageLoader
        className="w-full h-[200px] object-contain"
        width={400}
        height={400}
        imageURL={data.image[0]}
      />
      <div className="py-[24px] px-[16px] flex flex-col gap-[12px]">
        <h1 className="text-[1rem] font-semibold line-clamp-2">{data.title}</h1>
        <p className="text-[1rem] line-clamp-1">{data.preview}</p>
      </div>
    </Link>
  );
}
