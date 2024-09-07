/** @format */
"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import ChevronLeft from "@/assets/icons/chevron-left.svg";
import { TString } from "@/interface/page";

export default function GoBack({ category }: TString) {
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
      className="text-b-600 flex cursor-pointer items-center gap-2 text-[1.25rem] font-semibold sm:text-[0.875rem]"
      onClick={handleGoBack}
    >
      <Image src={ChevronLeft} alt="cheveon-left" />
      Kembali ke halaman Produk
    </p>
  );
}
