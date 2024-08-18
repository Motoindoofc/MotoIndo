/** @format */

import { Suspense } from "react";

import Link from "next/link";

import sanityFetch from "@/sanity/client";
import { SanityDocument } from "@sanity/client";

import Button from "./Button";
import CardArticle from "./CardArticle";

interface IList {
  isFull: boolean;
}

interface IArticleList {
  isFull?: boolean;
}
const ARTICLES_QUERY = `*[_type == "article"]{_id, title, slug, "mainImage":mainImage.asset->url}|order(date desc)`;

async function List({ isFull }: IList) {
  const articles = await sanityFetch<SanityDocument[]>({
    query: ARTICLES_QUERY,
  });

  return (
    <>
      {articles.length === 0 ? (
        <div>No article yet</div>
      ) : (
        <div className="flex gap-16">
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
    <section className="inner-wrapper mt-[160px]">
      <p className="font-bold text-[2.5rem]">
        Sejak 2008 berkontribusi dalam keamanan
      </p>
      <p className="mt-[16px] mb-[64px] text-[1.25rem]">
        Lihat proyek terbaru kami
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <List isFull={isFull} />
      </Suspense>
    </section>
  );
}
