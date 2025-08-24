/** @format */

import Image from "next/image";
import Link from "next/link";

import ArrowRight from "@/assets/icons/arrow-right-icon.svg";
import IntegratedIcon from "@/assets/icons/integrated-icon.svg";
import SignatureIcon1 from "@/assets/icons/signature-icon-1.svg";
import SignatureIcon2 from "@/assets/icons/signature-icon-2.svg";
import SignatureIcon3 from "@/assets/icons/signature-icon-3.svg";
import ArticleList from "@/shared/ArticleList";
import Button from "@/shared/Button";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import ServiceAccordion from "@/shared/ServiceAccordion";

import HomeService from "./HomeService";

function HeroBackgroundVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      className="w-full h-auto object-cover border-0 outline-none block m-0 p-0"
      style={{
        border: "none",
        outline: "none",
        boxShadow: "none",
        verticalAlign: "top",
      }}>
      <source src="/videos/hero-animation-map.mp4" type="video/mp4" />
    </video>
  );
}

function IntegratedBackgroundVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      className="aspect-square w-[538px] object-cover border-0 outline-none block m-0 p-0"
      style={{
        border: "none",
        outline: "none",
        boxShadow: "none",
        verticalAlign: "top",
      }}>
      <source src="/videos/integrated-animation.mp4" type="video/mp4" />
    </video>
  );
}

export default function Home() {
  const signatures = [
    {
      image: SignatureIcon1,
      title: "Radio Komunikasi",
      description:
        "Handy Talky (HT) komunikasi responsif dalam pekerjaan harian maupun dalam situasi darurat.",
    },
    {
      image: SignatureIcon2,
      title: "Keamanan Video",
      description:
        "sistem kamera memberikan pengawasan visual yang selalu siap merekam aktivitas.",
    },
    {
      image: SignatureIcon3,
      title: "Deteksi Sensor",
      description:
        "Handy Talky (HT) komunikasi responsif dalam pekerjaan harian maupun dalam situasi darurat.",
    },
  ];

  return (
    <section>
      <Navbar />
      <div className="outer-wrapper">
        <header className="inner-wrapper mt-[64px] py-[64px] mb-[80px]">
          <h1 className="text-center text-[4rem] font-bold sm:text-[2rem]">
            Membangun Ekosistem Keamanan{" "}
            <span className="text-b-600">Terintegrasi</span>
          </h1>
          <h2 className="text-n-700 mt-[4px] text-center text-[1.5rem] sm:text-[0.8rem]">
            MotoIndo membangun ekosistem teknologi keamanan Komunikasi, CCTV,
            dan Sensor yang terintegrasi serta komprehensif untuk berbagai
            industri.
          </h2>
          <HeroBackgroundVideo />
        </header>
        <section className="inner-wrapper">
          <h1 className="text-b-800 max-w-[960px] text-center text-[2.25rem] font-bold sm:text-[1.25rem]">
            Implementasi keamanan <br /> dalam perkembangan industri 4.0
          </h1>
          <h2 className="text-n-700 mt-[24px] text-center text-[1.25rem] sm:text-[0.75rem]">
            Platform all-in-one menghubungkan 3 pilar keamanan secara terpusat,
            meningkatkan keamanan <br /> dan efisiensi industri
          </h2>
          <div className="mt-[60px] flex gap-[48px] sm:flex-col">
            {signatures.map((signature, i) => (
              <div
                key={i}
                className="bg-b-100 flex w-[360px] flex-col items-center rounded-[12px] p-[24px]">
                <Image src={signature.image} alt={signature.title} />
                <p className="text-b-600 mb-[8px] mt-[12px] font-bold sm:text-[1rem]">
                  {signature.title}
                </p>
                <p className="text-n-700 text-center text-[1rem] sm:text-[0.75rem]">
                  {signature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-b-200 mt-[160px] flex w-full justify-between sm:flex-col">
          <div className="flex flex-col py-[64px] pl-[96px] pr-[40px] sm:gap-6 sm:px-[1rem] sm:py-[1.5rem]">
            <Image src={IntegratedIcon} alt="integrated" />
            <h1 className="text-b-600 mb-[36px] mt-[60px] text-[3rem] font-semibold sm:mb-0 sm:mt-0 sm:text-[1.25rem]">
              Terintegrasi & Desentralisasi
            </h1>
            <h2 className="text-n-700 text-[1.25rem] sm:text-[0.75rem]">
              Pusat kendali menghadirkan keamanan yang lebih efisien. <br />
              Memudahkan user dalam mengawasi ruang lingkup pekerjaan sehingga
              <br />
              tercipta lingkungan yang lebih aman.
            </h2>
            <Link
              href="/services/Terintegrasi-Desentralisasi"
              className="mt-[60px] flex cursor-pointer items-center gap-[10px] text-[1.5rem] text-[#4B65DB] sm:mt-0 sm:text-[0.875rem]">
              Pelajari Lebih Lanjut <Image src={ArrowRight} alt="arrow-right" />
            </Link>
          </div>
          <div className="bg-b-600 flex w-full items-center justify-center xl:w-[538px]">
            <IntegratedBackgroundVideo />
          </div>
        </section>
        <div className="sm:hidden">
          <HomeService />
        </div>
        <div className="hidden sm:block">
          <ServiceAccordion />
        </div>
        <ArticleList />
      </div>
      <Footer />
    </section>
  );
}
