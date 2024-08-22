/** @format */
"use client";

import { useEffect } from "react";

import { useSearchParams } from "next/navigation";

const ServiceArticleScrollHandler = () => {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [section]);

  return null;
};

export default ServiceArticleScrollHandler;
