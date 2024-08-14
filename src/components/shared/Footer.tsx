/** @format */

import Image from "next/image";

import EmailIcon from "@/assets/icons/email-icon.svg";
import WAIcon from "@/assets/icons/wa-icon.svg";
import CTAImage from "@/assets/images/footer-img.png";
import MotoIndo from "@/assets/logo/motoindo-footer-logo.svg";

import Achievement from "./Achievement";

function CTA() {
  return (
    <div
      className="bg-b-gradient flex flex-col rounded-[37px] w-[1156px] h-[422px] absolute pt-[60px] pb-[50px] px-[80px] justify-between gap-6"
      style={{
        top: "50%",
        left: "50%",
        transform: "translateX(-50%)",
      }}>
      <p className="text-n-100 font-semibold text-[3rem] w-[60%]">
        Tingkatkan keamanan dengan kami
      </p>
      <div className="flex flex-col gap-6">
        <div className="bg-n-100 rounded-2xl flex items-center justify-center w-[500px] h-[64px] py-[16px] gap-4">
          <Image src={EmailIcon} alt="email-icon" />
          <p className="text-b-700 text-[1.5rem] font-semibold">
            contact@motoindo.id
          </p>
        </div>
        <div className="bg-n-100 rounded-2xl flex items-center justify-center w-[500px] h-[64px] py-[16px] gap-4">
          <Image src={WAIcon} alt="wa-icon" />
          <p className="text-b-700 text-[1.5rem] font-semibold">
            +62 812 5643 9012
          </p>
        </div>
      </div>
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
    <div className="pt-[120px] bg-n-200" id="footer">
      <div className="h-[380px] relative">
        <CTA />
      </div>
      <div className="outer-wrapper h-[820px] px-[145px] bg-b-900 w-full">
        <div className="inner-wrapper">
          <div className="mt-[240px] w-full flex justify-center gap-12 max-w-[1156px]">
            <p className="mt-[40px] text-n-100 text-[3rem] w-[562px]">
              Serahkan ke Motoindo, Terpercaya dan Berpengalaman.
            </p>
            <Achievement />
          </div>
        </div>
      </div>
      <div className="outer-wrapper h-[400px] flex justify-center bg-n-100 py-[64px] px-[80px]">
        <div className="inner-wrapper h-full !items-start !justify-between">
          <div className="flex flex-col gap-[40px]">
            <Image src={MotoIndo} alt="footer-logo" />
            <p className="text-n-800 text-[1.5rem]">
              Solusi Integrasi Keamanan dan Radio Telekomunikasi
            </p>
          </div>
          <p className="text-n-800 text-[1rem]">
            Copyright © 2024 All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
