/** @format */

import { Suspense } from "react";

import Image from "next/image";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import sanityFetch from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import { SanityDocument } from "@sanity/client";

interface TSlug {
  slug: string;
}

interface IServiceDetail {
  params: TSlug;
}

const ARTICLE_QUERY = `*[_type == "article" && slug.current == $slug][0]{_id,  title, excerpt, publishedAt, body, "mainImage":mainImage.asset->url}`;

const customComponents = {
  types: {
    image: ({ value }: any) => {
      const { alt, asset } = value;
      return <img src={asset.url} alt={alt} />;
    },
    youtube: ({ value }: any) => {
      const { url } = value;
      return (
        <div className="video-container">
          <iframe
            src={url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      );
    },
  },
};

async function Article({ slug }: TSlug) {
  const article: any = await sanityFetch<SanityDocument[]>({
    query: ARTICLE_QUERY,
    params: { slug },
  });

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
      <PortableText value={article.body} components={customComponents} />
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
