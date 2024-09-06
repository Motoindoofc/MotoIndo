/** @format */

export interface TRoutes {
  id: string;
  href: string;
  name: string;
}

export interface TCategory {
  id: string;
  href: string;
  name: string;
}

export interface TProduct {
  _id: string;
  slug: { current: string };
  title: string;
  preview: string;
  image: string[];
}
