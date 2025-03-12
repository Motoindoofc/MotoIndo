/** @format */

import { Suspense } from 'react';

import { redirect } from 'next/navigation';
import Skeleton from 'react-loading-skeleton';

import { TArticle } from '@/interface/article';
import {
  PageProps,
  TSlug,
} from '@/interface/page';
import sanityFetch from '@/sanity/client';
import Footer from '@/shared/Footer';
import ImageLoader from '@/shared/ImageLoader';
import Navbar from '@/shared/Navbar';
import SanityPortableText from '@/shared/SanityPortableText';

// import ArticleDetailSkeleton from './ArticleDetailSkeleton';

const ARTICLE_QUERY = `
  *[_type == "article" && slug.current == $slug][0]{
    _id,
    title,
    excerpt,
    publishedAt,
    body,
    seoTitle,
    seoDescription,
    "mainImage": mainImage.asset->url
  }
`;

const SERVICE_SLUG_QUERY = `
  *[_type == "service"]{
    "slug": slug.current
  }
`;

export async function generateStaticParams() {
  const articles = await sanityFetch<{ slug: string }[]>({
    query: SERVICE_SLUG_QUERY,
  });

  return articles.map(({ slug }) => ({
    slug: [slug],
  }));
}

// export async function generateMetadata({ params }: PageProps) {
//   const article = await sanityFetch<TArticle>({
//     query: ARTICLE_QUERY,
//     params: { slug: params.slug },
//   });

//   if (!article) {
//     return {
//       title: "Article Not Found | MotoIndo",
//       description: "The requested article could not be found.",
//     };
//   }

//   return {
//     title: `${article.title} | MotoIndo`,
//     description: article.seoDescription,
//     openGraph: {
//       title: article.title,
//       description: article.excerpt,
//       images: [
//         {
//           url: article.mainImage,
//           alt: article.title,
//         },
//       ],
//       type: "article",
//     },
//   };
// }

function ArticleDetailSkeleton() {
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper flex flex-col gap-9 mt-[64px] py-[64px]">
        <Skeleton height="4rem" width={1400} />
        <Skeleton height="4rem" width={1400} />
        <Skeleton height="1.5rem" width={800} />
        <Skeleton height="1rem" width={300} />
      </div>
      <div className="inner-wrapper mt-[64px]">
        <Skeleton
          className="max-w-full"
          width={1440}
          borderRadius={20}
          height={800}
        />
        <Skeleton className="mt-[64px] max-w-full" width={1440} height={400} />
        <Skeleton className="mt-[64px] max-w-full" width={1440} height={400} />
        <Skeleton className="mt-[64px] max-w-full" width={1440} height={400} />
      </div>
    </div>
  );
}

async function Article({ slug }: TSlug) {
  const article = await sanityFetch<TArticle>({
    query: ARTICLE_QUERY,
    params: { slug },
  });

  if (!article) {
    return redirect("/not-found");
  }

  const date = new Date(article.publishedAt);

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  // @ts-ignore
  const formattedDate = date.toLocaleDateString("id-ID", options);

  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper flex !w-[1156px] flex-col gap-9 mt-[64px] py-[64px] sm:px-[1rem]">
        <h1 className="text-center text-[4rem] font-semibold sm:text-[2rem]">
          {article.title}
        </h1>
        <h2 className="text-n-700 text-center text-[1.5rem] sm:text-[1rem]">
          {article.excerpt}
        </h2>
        <p className="text-n-700">{formattedDate}</p>
      </div>
      <div className="inner-wrapper mt-[64px] !w-[1156px] sm:px-[1rem]">
        <ImageLoader
          imageURL={article.mainImage}
          className="w-full rounded-3xl"
          height={800}
          width={800}
          alt="main-image"
        />
      </div>
      <div className="outer-wrapper mt-[40px]">
        <div className="inner-wrapper !w-[1156px] sm:px-[1rem]">
          <SanityPortableText value={article.body} />
        </div>
      </div>
    </div>
  );
}

export default function ServiceDetail({ params }: PageProps) {
  return (
    <section>
      <Navbar />
      <Suspense fallback={<ArticleDetailSkeleton />}>
        <Article slug={params.slug} />
      </Suspense>
      <Footer />
    </section>
  );
}
