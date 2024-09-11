/** @format */
"use client";

import { useEffect } from "react";

import Image from "next/image";

import WAIcon from "@/assets/icons/wa-icon-white.svg";
import { TString } from "@/interface/page";

import routeToWhatsApp from "./util";

export function FixedButton({ itemName }: TString) {
  useEffect(() => {
    // Get the button and footer elements, cast them to HTMLElement
    const button = document.querySelector(
      ".fixed-button"
    ) as HTMLElement | null;
    const footer = document.getElementById("footer") as HTMLElement | null;

    // If either element is missing, exit early
    if (!button || !footer) return;

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
    <div className="button-container relative mt-[100px]">
      <button
        className="fixed-button text-n-100 fixed bottom-[40px] right-[50%] hidden h-[72px] w-[312px] translate-x-[50%] items-center justify-center gap-3 rounded-[72px] bg-[#0EA46D] text-[1.25rem] font-bold sm:flex"
        onClick={() => routeToWhatsApp(itemName)}>
        <Image src={WAIcon} alt="wa-icon" /> Contact Via Whatsapp
      </button>
    </div>
  );
}

export function StaticButton({ productTitle }: { productTitle: string }) {
  return (
    <button
      onClick={() => routeToWhatsApp(productTitle)}
      className="text-n-100 flex h-[72px] w-full items-center justify-center gap-3 rounded-lg bg-[#0EA46D] py-[18px] text-[1.25rem] font-semibold sm:hidden">
      <Image src={WAIcon} alt="wa-icon" /> Order Via Whatsapp
    </button>
  );
}
