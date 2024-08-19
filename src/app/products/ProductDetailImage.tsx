/** @format */
"use client";

import { useState } from "react";

import Image from "next/image";

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

  const onClickGallery = (id: number) => {
    const newImage = formattedImages.find((image) => image.id === id);
    setSelectedImage(newImage as any);
  };

  return (
    <div className="w-[50%] flex flex-col gap-4">
      <Image
        src={selectedImage.imageURL}
        width={800}
        height={800}
        alt="product-img"
        className="w-full h-[560px] object-cover object rounded-3xl"
      />
      {formattedImages.length > 1 && (
        <div className="h-[200px] flex gap-3 items-stretch justify-between">
          {formattedImages.map((image) => (
            <Image
              key={image.id}
              src={image.imageURL}
              width={400}
              height={400}
              onClick={() => onClickGallery(image.id)}
              alt="product-img"
              className={`cursor-pointer w-full object-center object-cover overflow-hidden rounded-lg border ${
                selectedImage.id === image.id
                  ? " border-blue-400 p-1"
                  : "border-n-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
