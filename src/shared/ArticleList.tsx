/** @format */

import { Suspense } from "react";

import Link from "next/link";

import ArticleSkeletons from "@/app/services/ArticleSkeletons";
import { TArticle, TArticlePreview } from "@/interface/article";
import sanityFetch from "@/sanity/client";

import Button from "./Button";
import ImageLoader from "./ImageLoader";

interface IList {
  isFull: boolean;
}

interface IArticleList {
  isFull?: boolean;
}

const ARTICLES_QUERY = `
  *[_type == "article"]{
    _id,
    title,
    slug,
    publishedAt,
    "mainImage": mainImage.asset->url
  } | order(publishedAt desc)
`;

function CardArticle({ data }: { data: TArticlePreview }) {
  return (
    <Link
      href={`/services/${data.slug.current}`}
      className="h-[460px] w-[360px] max-w-full cursor-pointer overflow-hidden rounded-2xl sm:h-[320px]"
      style={{ boxShadow: "0px 4px 25.1px 0px rgba(0, 0, 0, 0.09)" }}>
      <ImageLoader
        imageURL={data.mainImage}
        alt={data.title}
        width={400}
        height={400}
        className="h-[260px] sm:h-[160px] w-full object-cover"
      />
      <p className="text-n-800 pt-[24px] px-[24px] h-auto text-[1.5rem] font-semibold sm:text-[1rem] sm:px-[12px] sm:pt-[12px] line-clamp-4 sm:line-clamp-5">
        {data.title}
      </p>
    </Link>
  );
}

async function List({ isFull }: IList) {
  const articles = await sanityFetch<TArticle[]>({
    query: ARTICLES_QUERY,
  });

  return (
    <>
      {articles.length === 0 ? (
        <div>No article yet</div>
      ) : (
        <div className="flex gap-16 sm:grid sm:grid-cols-2 sm:gap-4">
          {articles.map((article) => (
            <CardArticle key={article._id} data={article} />
          ))}
        </div>
      )}
      {!isFull && articles.length > 0 && (
        <Link href="/services?section=service-article">
          <Button customClass="mt-[80px]">Lihat Lebih Banyak</Button>
        </Link>
      )}
    </>
  );
}

export default async function ArticleList({ isFull = false }: IArticleList) {
  return (
    <section className="inner-wrapper mt-[160px] sm:px-[1rem]">
      <p className="text-center text-[2.5rem] font-bold sm:text-[1.5rem]">
        Sejak 2008 berkontribusi dalam keamanan
      </p>
      <p className="mb-[64px] mt-[16px] text-[1.25rem] sm:text-[0.75rem]">
        Lihat proyek terbaru kami
      </p>

      <Suspense fallback={<ArticleSkeletons />}>
        <List isFull={isFull} />
      </Suspense>
    </section>
  );
}
