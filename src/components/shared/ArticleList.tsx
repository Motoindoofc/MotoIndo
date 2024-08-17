/** @format */

import Link from "next/link";

import sanityFetch from "@/sanity/client";
import { SanityDocument } from "@sanity/client";

import Button from "./Button";
import CardArticle from "./CardArticle";

interface IArticleList {
  isFull?: boolean;
}

const EVENTS_QUERY = `*[_type == "article"]{_id, name, title, slug, mainImage}|order(date desc)`;

export default async function ArticleList({ isFull = false }: IArticleList) {
  const articles = await sanityFetch<SanityDocument[]>({ query: EVENTS_QUERY });
  console.log("🚀 ~ ArticleList ~ articles:", articles);

  // const data = [
  //   {
  //     image: ArticleImg,
  //     title: "Instalasi Radio Repeater & Pembaruan sistem",
  //   },
  //   {
  //     image: ArticleImg,
  //     title: "Instalasi Rig-Base pada truk pertambang",
  //   },
  //   {
  //     image: ArticleImg,
  //     title: "HT dengan keamanan ekstra untuk\npertambangan dan kilang minyak",
  //   },
  // ];

  return (
    <section className="inner-wrapper mt-[160px]">
      <p className="font-bold text-[2.5rem]">
        Sejak 2008 berkontribusi dalam keamanan
      </p>
      <p className="mt-[16px] mb-[64px] text-[1.25rem]">
        Lihat proyek terbaru kami
      </p>
      <div className="flex gap-[64px]">
        {articles.map((article) => (
          <CardArticle key={article._id} data={article} />
        ))}
      </div>
      {!isFull && (
        <Link href="/services?section=service-article">
          <Button customClass="mt-[80px]">Lihat Lebih Banyak</Button>
        </Link>
      )}
    </section>
  );
}
