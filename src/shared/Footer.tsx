/** @format */

import Image from "next/image";

import EmailIcon from "@/assets/icons/email-icon.svg";
import WAIcon from "@/assets/icons/wa-icon.svg";
import CTAImage from "@/assets/images/footer-img.png";
import MotoIndo from "@/assets/logo/motoindo-footer-logo.svg";

import Achievement from "./Achievement";

function ContactSection() {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "0851 3488 8834";
  const email = process.env.NEXT_PUBLIC_EMAIL || "motoindoofficial@gmail.com";

  return (
    <>
      <p className="text-n-100 w-[60%] text-[3rem] font-semibold sm:w-full sm:text-center sm:text-[1.75rem]">
        Tingkatkan keamanan dengan kami
      </p>
      <div className="flex flex-col gap-6">
        <div className="bg-n-100 flex h-[64px] w-[500px] max-w-full items-center justify-center gap-4 rounded-2xl py-[16px] sm:w-auto sm:gap-2 sm:px-[24px]">
          <Image src={EmailIcon} alt="email-icon" />
          <p className="text-b-700 text-[1.5rem] font-semibold">{email}</p>
        </div>
        <div className="bg-n-100 flex h-[64px] w-[500px] max-w-full items-center justify-center gap-4 rounded-2xl py-[16px] sm:w-auto sm:gap-2 sm:px-[24px]">
          <Image src={WAIcon} alt="wa-icon" />
          <p className="text-b-700 text-[1.5rem] font-semibold">
            {phoneNumber}
          </p>
        </div>
      </div>
    </>
  );
}

function CTA() {
  return (
    <div
      className="bg-b-gradient absolute flex h-[422px] w-[1156px] flex-col justify-between gap-6 rounded-[37px] px-[80px] pb-[50px] pt-[60px]"
      style={{
        top: "50%",
        left: "50%",
        transform: "translateX(-50%)",
      }}>
      <ContactSection />
      <Image
        src={CTAImage}
        alt="cta-image"
        className="absolute"
        style={{
          top: "-38%",
          right: "2.5%",
        }}
      />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-n-200 pt-[120px] sm:pt-[120px]" id="footer">
      <div className="relative h-[380px] sm:hidden">
        <CTA />
      </div>
      {/* <div className="hidden sm:flex bg-b-gradient flex-col items-center gap-9 pt-[24px] pb-[70px] px-0 sm:px-[1rem]">
        <ContactSection />
      </div> */}
      <div className="outer-wrapper bg-b-900 h-[820px] w-full px-[145px] sm:h-auto sm:px-[24px]">
        <div className="inner-wrapper">
          <div className="mt-[240px] flex w-full max-w-[1156px] justify-center gap-12 sm:mt-0 sm:flex-col sm:gap-4">
            <p className="text-n-100 mt-[40px] w-[562px] text-[3rem] sm:w-auto sm:text-[2rem]">
              Serahkan ke Motoindo, Terpercaya dan Berpengalaman.
            </p>
            <Achievement />
          </div>
        </div>
      </div>
      <div className="outer-wrapper bg-n-100 flex h-[400px] justify-center px-[80px] py-[64px] sm:px-[40px]">
        <div className="inner-wrapper h-full !items-start !justify-between sm:!items-center">
          <div className="flex flex-col gap-[40px] sm:items-center">
            <Image src={MotoIndo} alt="footer-logo" />
            <p className="text-n-800 text-[1.5rem] sm:text-center sm:text-[1.25rem]">
              Solusi Integrasi Keamanan dan Radio Telekomunikasi
            </p>
          </div>
          <p className="text-n-800 text-[1rem] sm:text-center sm:text-[1rem]">
            Copyright © 2024 All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
