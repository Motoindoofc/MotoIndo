/** @format */
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import CallIcon from "@/assets/icons/call-icon.svg";
import MotoindoLogo from "@/assets/logo/motoindo-nav-logo.png";

import Button from "./Button";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const routes = [
    {
      name: "Beranda",
      href: "/",
    },
    {
      name: "Layanan",
      href: "/services",
    },
    {
      name: "Produk",
      href: "/products",
    },
  ];

  return (
    <nav className="h-[86px] px-[96px] bg-n-100 outer-wrapper">
      <div className="w-[1440px] flex items-center justify-between">
        <Image src={MotoindoLogo} alt="motoindo-logo" height={36} />
        <div className="w-[417px] px-[24px] flex justify-between">
          {routes.map((route, i) => (
            <Link
              key={i}
              className={`text-[1.25rem] ${
                route.href === pathname ? "font-bold text-b-600" : "text-n-900"
              }`}
              href={route.href}>
              {route.name}
            </Link>
          ))}
        </div>
        <Button
          customClass="gap-3"
          onClick={() => router.push(`${pathname}#footer`)}>
          <Image src={CallIcon} alt="call-icon" /> Hubungi Kami
        </Button>
      </div>
    </nav>
  );
}
