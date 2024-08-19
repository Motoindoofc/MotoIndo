/** @format */

import { Suspense } from "react";

import Image from "next/image";
import { redirect } from "next/navigation";

import sanityFetch from "@/sanity/client";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import SanityPortableText from "@/shared/SanityPortableText";
import { SanityDocument } from "@sanity/client";

interface TSlug {
  slug: string;
}

interface IServiceDetail {
  params: TSlug;
}

const ARTICLE_QUERY = `*[_type == "article" && slug.current == $slug][0]{_id,  title, excerpt, publishedAt, body, "mainImage":mainImage.asset->url}`;

async function Article({ slug }: TSlug) {
  const article: any = await sanityFetch<SanityDocument[]>({
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
      <div className="inner-wrapper py-[64px] flex flex-col gap-9">
        <h1 className="text-[4rem] font-semibold text-center">
          {article.title}
        </h1>
        <h2 className="text-n-700 text-[1.5rem] text-center">
          {article.excerpt}
        </h2>
        <p className="text-n-700">{formattedDate}</p>
      </div>
      <div className="mt-[64px] inner-wrapper">
        <Image
          src={article.mainImage}
          className="w-full rounded-3xl"
          height={1000}
          width={1000}
          alt="main-image"
        />
      </div>
      <SanityPortableText value={article.body} />
    </div>
  );
}

export default function ServiceDetail({ params }: IServiceDetail) {
  return (
    <section>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Article slug={params.slug} />
      </Suspense>
      <Footer />
    </section>
  );
}
