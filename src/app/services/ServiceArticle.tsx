/** @format */
"use client";

import { useEffect } from "react";

import { useSearchParams } from "next/navigation";

import ArticleList from "@/shared/ArticleList";

export default function ServiceArticle() {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  useEffect(() => {
    if (typeof window !== "undefined" && section) {
      const element = document.getElementById(section);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [searchParams, section]);

  return (
    <div className="outer-wrapper" id="service-article">
      <ArticleList isFull />
    </div>
  );
}
