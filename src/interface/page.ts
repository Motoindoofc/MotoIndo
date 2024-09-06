/** @format */

export interface TSlug {
  slug: string[];
}

export interface PageProps {
  params: TSlug;
}

export interface TString {
  [key: string]: string;
}
