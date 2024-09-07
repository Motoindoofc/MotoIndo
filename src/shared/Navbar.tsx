/** @format */
"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import CallIcon from "@/assets/icons/call-icon.svg";
import MotoindoLogo from "@/assets/logo/motoindo-nav-logo.png";

import Button from "./Button";

const routes = [
  { name: "Beranda", href: "/" },
  { name: "Layanan", href: "/services" },
  { name: "Produk", href: "/products" },
];

interface MobileNavbarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

function MobileNavbar({ isOpen, setIsOpen }: MobileNavbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const currentPathname = pathname.split("/")[1];

  const toLink = (pathname: string) => {
    setIsOpen(false);
    setTimeout(() => {
      router.push(pathname);
    }, 500);
  };

  const goToCTA = (pathname: string) => {
    setIsOpen(false);
    setTimeout(() => {
      router.push(pathname);
    }, 500);
  };

  return (
    <div
      className={`bg-n-100 fixed right-0 top-0 z-10 hidden h-full w-full transform flex-col gap-16 p-[24px] transition-transform duration-300 sm:flex ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between">
        <p className="text-b-800 text-[1.5rem]">Menu</p>
      </div>
      <div className="flex flex-col gap-16">
        {routes.map((route, i) => (
          <p
            key={i}
            onClick={() => toLink(route.href)}
            className={`cursor-pointer text-[1.25rem] ${
              route.href.replace("/", "") === currentPathname
                ? "text-b-600 font-bold"
                : "text-n-900"
            }`}
          >
            {route.name}
          </p>
        ))}
      </div>
      <Button
        customClass="gap-3 w-full py-[16px] h-auto self-end"
        onClick={() => goToCTA(`${pathname}#footer`)}
      >
        <Image src={CallIcon} alt="call-icon" /> Hubungi Kami
      </Button>
    </div>
  );
}

function NavbarComponent({
  isScrolled,
  isOpen,
  setIsOpen,
  isFixed = false,
}: {
  isScrolled: boolean;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isFixed?: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const currentPathname = pathname.split("/")[1];

  return (
    <nav
      className={`${
        isFixed ? "fixed left-0 top-0" : "relative"
      } bg-n-100 outer-wrapper z-20 h-[5rem] transform px-[96px] transition-all duration-200 sm:px-[24px] ${
        isOpen ? "!bg-transparent" : "border-b border-solid border-neutral-100"
      } ${isFixed && isScrolled ? "opacity-1 translate-y-0" : ""} ${
        isFixed && !isScrolled ? "-translate-y-full opacity-0" : ""
      }`}
    >
      <div className="flex w-[1440px] max-w-full items-center justify-between">
        <Image
          className={`transition ${isOpen ? "opacity-0" : ""}`}
          src={MotoindoLogo}
          alt="motoindo-logo"
          height={36}
        />

        <div className="flex w-[417px] justify-between px-[24px] sm:hidden">
          {routes.map((route, i) => (
            <Link
              key={i}
              className={`text-[1.25rem] ${
                route.href.replace("/", "") === currentPathname
                  ? "text-b-600 font-bold"
                  : "text-n-900"
              }`}
              href={route.href}
            >
              {route.name}
            </Link>
          ))}
        </div>
        <Button
          customClass="gap-3 sm:hidden"
          onClick={() => router.push(`${pathname}#footer`)}
        >
          <Image src={CallIcon} alt="call-icon" /> Hubungi Kami
        </Button>
        <div
          className="hidden cursor-pointer flex-col justify-center gap-1 sm:flex"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`h-[2px] w-[20px] bg-neutral-900 transition-transform duration-300 ${
              isOpen ? "translate-y-[6px] rotate-45 transform" : ""
            }`}
          ></div>
          <div
            className={`h-[2px] w-[20px] bg-neutral-900 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`h-[2px] w-[20px] bg-neutral-900 transition-transform duration-300 ${
              isOpen ? "-translate-y-[6px] -rotate-45 transform" : ""
            }`}
          ></div>
        </div>
      </div>
    </nav>
  );
}

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsScrolled(scrollPosition >= 300);
  }, [scrollPosition]);

  return (
    <>
      <MobileNavbar setIsOpen={setIsOpen} isOpen={isOpen} />
      <NavbarComponent
        isScrolled={isScrolled}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isFixed
      />
      <NavbarComponent
        isScrolled={isScrolled}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
