/** @format */

"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

interface IImageLoader {
  imageURL: string;
  height: number;
  width: number;
  className: string;
  alt?: string;
}

export default function ImageLoader({
  imageURL,
  height,
  width,
  className,
  alt = "motoindo gambar",
}: IImageLoader) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const img = document.createElement("img");
    img.src = imageURL;
    img.onload = () => {
      setIsLoading(false);
    };

    img.onerror = () => {
      setIsLoading(false);
    };
  }, [imageURL]);

  return (
    <Image
      src={imageURL}
      width={isLoading ? 1 : width}
      height={isLoading ? 1 : height}
      alt={alt}
      className={className}
    />
  );
}
