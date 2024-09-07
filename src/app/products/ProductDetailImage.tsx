/** @format */
"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import ArrowBack from "@/assets/icons/arrow-back.svg";
import ArrowForward from "@/assets/icons/arrow-forward.svg";
import { ArrowButtonProps } from "@/interface/product";
import ImageLoader from "@/shared/ImageLoader";

function ArrowButton({ isBack = false, scrollContainerRef }: ArrowButtonProps) {
  const [isOverflowing, setIsOverflowing] = useState(false);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  const buttonProps = isBack
    ? {
        onClick: handleScrollLeft,
        className: "absolute p-2 bg-white rounded-full shadow-md left-1",
        imageSrc: ArrowBack,
      }
    : {
        onClick: handleScrollRight,
        className: "absolute p-2 bg-white rounded-full shadow-md right-1",
        imageSrc: ArrowForward,
      };

  useEffect(() => {
    const checkOverflow = () => {
      if (scrollContainerRef.current) {
        setIsOverflowing(
          scrollContainerRef.current.scrollWidth >
            scrollContainerRef.current.clientWidth,
        );
      }
    };

    checkOverflow();

    window.addEventListener("resize", checkOverflow);
    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, [scrollContainerRef]);

  if (!isOverflowing) return null;

  return (
    <button onClick={buttonProps.onClick} className={buttonProps.className}>
      <Image src={buttonProps.imageSrc} alt="ArrowBack" height={24} />
    </button>
  );
}

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const onClickGallery = (id: number) => {
    const newImage = formattedImages.find((image) => image.id === id);
    setSelectedImage(newImage as any);
  };

  return (
    <div className="flex w-[50%] flex-col gap-4 sm:w-full">
      <ImageLoader
        imageURL={selectedImage.imageURL}
        width={800}
        height={800}
        className="h-[560px] w-full rounded-3xl border object-contain"
      />
      {formattedImages.length > 1 && (
        <div className="relative flex items-center">
          <ArrowButton scrollContainerRef={scrollContainerRef} isBack />
          <div
            ref={scrollContainerRef}
            className="scrollbar-hide container flex h-[200px] items-stretch justify-start gap-3 overflow-x-auto"
          >
            {formattedImages.map((image) => (
              <Image
                key={image.id}
                src={image.imageURL}
                width={200}
                height={200}
                onClick={() => onClickGallery(image.id)}
                alt="product-img"
                className={`cursor-pointer select-none rounded-lg border object-cover ${
                  selectedImage.id === image.id
                    ? "border-blue-400 p-1"
                    : "border-n-400"
                }`}
                draggable="false"
              />
            ))}
          </div>
          <ArrowButton scrollContainerRef={scrollContainerRef} />
        </div>
      )}
    </div>
  );
}
