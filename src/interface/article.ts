/** @format */

export interface TArticle {
  _id: string;
  title: string;
  excerpt: string;
  publishedAt: string; // ISO string, could use Date if it's parsed
  body: any; // Replace 'any' with the actual structure of 'body' if you know it
  mainImage: string; // URL of the image
}
