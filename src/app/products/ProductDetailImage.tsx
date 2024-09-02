/** @format */
"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import ImageLoader from "@/shared/ImageLoader";

export default function ProductDetailImage({
  imageURL,
}: {
  imageURL: string[];
}) {
  const formattedImages = imageURL.map((image, i) => ({
    id: i,
    imageURL: image,
  }));

  const [selectedImage, setSelectedImage] = useState(formattedImages[0]);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const onClickGallery = (id: number) => {
    const newImage = formattedImages.find((image) => image.id === id);
    setSelectedImage(newImage as any);
  };

  // Ref to the scrollable container
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll left
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  // Function to scroll right
  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  // Check if the content is overflowing
  useEffect(() => {
    const checkOverflow = () => {
      if (scrollContainerRef.current) {
        setIsOverflowing(
          scrollContainerRef.current.scrollWidth >
            scrollContainerRef.current.clientWidth
        );
      }
    };

    checkOverflow();

    // Recheck overflow on window resize
    window.addEventListener("resize", checkOverflow);
    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, [formattedImages]);

  return (
    <div className="w-[50%] flex flex-col gap-4 sm:w-full">
      <ImageLoader
        imageURL={selectedImage.imageURL}
        width={800}
        height={800}
        className="w-full h-[560px] object-contain rounded-3xl border"
      />
      {formattedImages.length > 1 && (
        <div className="relative flex items-center">
          {isOverflowing && (
            <button
              onClick={handleScrollLeft}
              className="absolute left-0 p-2 bg-white rounded-full shadow-md">
              <IoIosArrowBack size={24} />
            </button>
          )}
          <div
            ref={scrollContainerRef}
            className="h-[200px] flex gap-3 items-stretch justify-start overflow-x-auto scrollbar-hide container">
            {formattedImages.map((image) => (
              <Image
                key={image.id}
                src={image.imageURL}
                width={200}
                height={200}
                onClick={() => onClickGallery(image.id)}
                alt="product-img"
                className={`select-none cursor-pointer object-cover rounded-lg border ${
                  selectedImage.id === image.id
                    ? "border-blue-400 p-1"
                    : "border-n-400"
                }`}
                draggable="false"
              />
            ))}
          </div>
          {isOverflowing && (
            <button
              onClick={handleScrollRight}
              className="absolute right-0 p-2 bg-white rounded-full shadow-md">
              <IoIosArrowForward size={24} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
