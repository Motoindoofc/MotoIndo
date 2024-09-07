/** @format */

import Image from "next/image";
import Link from "next/link";

import NotFoundIcon from "@/assets/icons/not-found-icon.svg";
import Button from "@/shared/Button";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";

export default function NotFound() {
  return (
    <section>
      <Navbar />
      <div className="outer-wrapper">
        <div className="inner-wrapper">
          <Image
            className="mt-[64px]"
            src={NotFoundIcon}
            alt="not-found-icon"
          />
          <p className="text-n-900 mt-[94px] text-[2.25rem] font-semibold">
            Ups! Halaman Tidak Ditemukan
          </p>
          <p className="text-n-900 text-[1.5rem]">
            Sepertinya halaman yang Anda cari tidak ada atau telah dipindahkan.
          </p>
          <Link href="/" className="mt-[48px]">
            <Button isGradient={false}>Kembali Ke Beranda</Button>
          </Link>
        </div>
      </div>

      <Footer />
    </section>
  );
}
