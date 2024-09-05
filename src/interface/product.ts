/** @format */

export interface TCategory {
  id: string;
  href: string;
  name: string;
}

export interface Product {
  _id: string;
  slug: { current: string };
  title: string;
  preview: string;
  image: string[];
}
