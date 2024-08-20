/** @format */
"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import ChevronLeft from "@/assets/icons/chevron-left.svg";

export default function GoBack({ category }: { category: string }) {
  const router = useRouter();
  const [hasRouteBack, setHasRouteBack] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasRouteBack(window.history.length > 2);
    }
  }, []);

  const handleGoBack = () => {
    if (hasRouteBack) {
      router.back();
    } else {
      router.push(`/products/${category}`);
    }
  };

  return (
    <p
      className="cursor-pointer flex items-center font-semibold  gap-2 text-[1.25rem] text-b-600"
      onClick={handleGoBack}>
      <Image src={ChevronLeft} alt="cheveon-left" />
      Kembali ke halaman Produk
    </p>
  );
}
