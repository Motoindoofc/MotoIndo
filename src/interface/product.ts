/** @format */

export interface ProductCardProps {
  data: TProduct;
}

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
  date: string;
  body: string;
  category: {
    value: string;
  };
}

export interface ArrowButtonProps {
  isBack?: boolean;
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}
