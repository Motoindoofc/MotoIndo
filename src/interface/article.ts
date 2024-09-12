/** @format */

export interface TArticle {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  publishedAt: string;
  body: any;
  mainImage: string;
  seoTitle?: string;
  seoDescription?: string;
}

export type TArticlePreview = Pick<TArticle, "mainImage" | "title" | "slug">;
