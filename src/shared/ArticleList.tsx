/** @format */

import { Suspense } from 'react';

import Link from 'next/link';

import ArticleSkeletons from '@/app/services/ArticleSkeletons';
import sanityFetch from '@/sanity/client';
import { SanityDocument } from '@sanity/client';

import Button from './Button';
import ImageLoader from './ImageLoader';

interface IList {
  isFull: boolean;
}

interface IArticleList {
  isFull?: boolean;
}
const ARTICLES_QUERY = `*[_type == "article"]{_id, title, slug, "mainImage":mainImage.asset->url}|order(date desc)`;

function CardArticle({ data }: any) {
  return (
    <Link
      href={`/services/${data.slug.current}`}
      className="h-[460px] w-[360px] max-w-full cursor-pointer overflow-hidden rounded-2xl"
      style={{ boxShadow: "0px 4px 25.1px 0px rgba(0, 0, 0, 0.09)" }}
    >
      <ImageLoader
        imageURL={data.mainImage}
        alt={data.title}
        width={400}
        height={400}
        className="h-[260px] w-full object-cover"
      />
      <p className="text-n-800 p-[24px] text-[1.5rem] font-semibold sm:text-[1.25rem]">
        {data.title}
      </p>
    </Link>
  );
}

async function List({ isFull }: IList) {
  const articles = await sanityFetch<SanityDocument[]>({
    query: ARTICLES_QUERY,
  });

  return (
    <>
      {articles.length === 0 ? (
        <div>No article yet</div>
      ) : (
        <div className="flex gap-16 sm:flex-col">
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
