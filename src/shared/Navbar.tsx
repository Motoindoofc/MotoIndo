/** @format */
"use client";

import {
  useEffect,
  useState,
} from 'react';

import Image from 'next/image';
import Link from 'next/link';
import {
  usePathname,
  useRouter,
} from 'next/navigation';

import CallIcon from '@/assets/icons/call-icon.svg';
import MotoindoLogo from '@/assets/logo/motoindo-nav-logo.png';

import Button from './Button';

const routes = [
  { name: "Beranda", href: "/" },
  { name: "Layanan", href: "/services" },
  { name: "Produk", href: "/products" },
];

function MobileNavbar({ isOpen }: { isOpen: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  const currentPathname = pathname.split("/")[1];

  return (
    <div
      className={`hidden sm:flex flex-col gap-16 fixed top-0 right-0 h-full w-full bg-b-400 p-[24px] transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
      <div className="flex justify-between">
        <p className="text-b-800 text-[1.5rem]">Menu</p>
      </div>
      <div className="flex flex-col gap-16">
        {routes.map((route, i) => (
          <p
            key={i}
            className={`text-[1.25rem] ${
              route.href.replace("/", "") === currentPathname
                ? "font-bold text-b-600"
                : "text-n-900"
            }`}>
            {route.name}
          </p>
        ))}
      </div>
      <Button
        customClass="gap-3 w-full py-[16px] h-auto self-end"
        onClick={() => router.push(`${pathname}#footer`)}>
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
        isFixed ? "fixed top-0 left-0" : ""
      } transform transition-all duration-200 h-[5rem] px-[96px] sm:px-[24px] bg-n-100 outer-wrapper ${
        isOpen ? "!bg-transparent" : ""
      } ${isFixed && isScrolled ? "opacity-1 translate-y-0" : ""} ${
        isFixed && !isScrolled ? "opacity-0 -translate-y-full" : ""
      }`}>
      <div className="w-[1440px] max-w-full flex items-center justify-between">
        <Image
          className={`transition ${isOpen ? "opacity-0" : ""}`}
          src={MotoindoLogo}
          alt="motoindo-logo"
          height={36}
        />

        <div className="w-[417px] px-[24px] flex justify-between sm:hidden">
          {routes.map((route, i) => (
            <Link
              key={i}
              className={`text-[1.25rem] ${
                route.href.replace("/", "") === currentPathname
                  ? "font-bold text-b-600"
                  : "text-n-900"
              }`}
              href={route.href}>
              {route.name}
            </Link>
          ))}
        </div>
        <Button
          customClass="gap-3 sm:hidden"
          onClick={() => router.push(`${pathname}#footer`)}>
          <Image src={CallIcon} alt="call-icon" /> Hubungi Kami
        </Button>
        <div
          className="hidden sm:flex flex-col gap-1 justify-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}>
          <div
            className={`h-[2px] bg-neutral-900 w-[20px] transition-transform duration-300 ${
              isOpen ? "transform rotate-45 translate-y-[6px]" : ""
            }`}></div>
          <div
            className={`h-[2px] bg-neutral-900 w-[20px] transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}></div>
          <div
            className={`h-[2px] bg-neutral-900 w-[20px] transition-transform duration-300 ${
              isOpen ? "transform -rotate-45 -translate-y-[6px]" : ""
            }`}></div>
        </div>
      </div>
    </nav>
  );
}

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Default is false for closed

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
      <MobileNavbar isOpen={isOpen} />
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
