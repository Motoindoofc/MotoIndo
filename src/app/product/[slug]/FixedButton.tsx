/** @format */
"use client";

import { useEffect } from "react";

import Image from "next/image";

import WAIcon from "@/assets/icons/wa-icon-white.svg";

export default function FixedButton() {
  useEffect(() => {
    // Get the button and footer elements, cast them to HTMLElement
    const button = document.querySelector(
      ".fixed-button"
    ) as HTMLElement | null;
    const footer = document.getElementById("footer") as HTMLElement | null;

    // If either element is missing, exit early
    if (!button || !footer) {
      console.warn("Button or Footer element not found");
      return;
    }

    // Callback function for Intersection Observer
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          button.style.position = "absolute";
          button.style.bottom = "0px";
        } else {
          button.style.position = "fixed";
          button.style.bottom = "40px";
        }
      });
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver(handleIntersect, {
      root: null, // Use the viewport as the root
      threshold: 0, // Trigger as soon as any part of the footer is visible
    });

    // Observe the footer element
    observer.observe(footer);

    // Cleanup function to unobserve when component unmounts
    return () => {
      observer.unobserve(footer);
    };
  }, []);

  return (
    <div className="mt-[100px] button-container relative">
      <button className="fixed-button fixed bottom-[40px] right-[50%] translate-x-[50%] items-center justify-center rounded-[72px] h-[72px] w-[312px] font-bold text-n-100 bg-[#0EA46D] text-[1.25rem] gap-3 hidden sm:flex">
        <Image src={WAIcon} alt="wa-icon" /> Contact Via Whatsapp
      </button>
    </div>
  );
}
