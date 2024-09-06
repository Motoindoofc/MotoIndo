/** @format */

import { Suspense } from "react";

import Image from "next/image";
import { redirect } from "next/navigation";

import { TArticle } from "@/interface/article";
import { PageProps, TSlug } from "@/interface/page";
import sanityFetch from "@/sanity/client";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import SanityPortableText from "@/shared/SanityPortableText";

import ArticleDetailSkeleton from "./ArticleDetailSkeleton";

const ARTICLE_QUERY = `*[_type == "article" && slug.current == $slug][0]{_id,  title, excerpt, publishedAt, body, "mainImage":mainImage.asset->url}`;

async function Article({ slug }: TSlug) {
  const article: TArticle = await sanityFetch<TArticle>({
    query: ARTICLE_QUERY,
    params: { slug },
  });

  if (!article) {
    return redirect("/services");
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
      <div className="inner-wrapper py-[64px] flex flex-col gap-9 !w-[1156px] sm:px-[1rem]">
        <h1 className="text-[4rem] font-semibold text-center sm:text-[2rem]">
          {article.title}
        </h1>
        <h2 className="text-n-700 text-[1.5rem] text-center sm:text-[1rem]">
          {article.excerpt}
        </h2>
        <p className="text-n-700">{formattedDate}</p>
      </div>
      <div className="mt-[64px] inner-wrapper !w-[1156px] sm:px-[1rem]">
        <Image
          src={article.mainImage}
          className="w-full rounded-3xl"
          height={1000}
          width={1000}
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
