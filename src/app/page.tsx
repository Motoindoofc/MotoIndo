/** @format */

import Image from "next/image";

import ArrowRight from "@/assets/icons/arrow-right-icon.svg";
import IntegratedIcon from "@/assets/icons/integrated-icon.svg";
import SignatureIcon1 from "@/assets/icons/signature-icon-1.svg";
import SignatureIcon2 from "@/assets/icons/signature-icon-2.svg";
import SignatureIcon3 from "@/assets/icons/signature-icon-3.svg";
import ArticleList from "@/components/shared/ArticleList";
import Button from "@/components/shared/Button";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import HomeService from "@/components/ui/HomeService";

function HeroBackgroundVideo() {
  return (
    <video autoPlay muted loop>
      <source src="/videos/hero-animation-map.mp4" type="video/mp4" />
    </video>
  );
}

function IntegratedBackgroundVideo() {
  return (
    <video autoPlay muted loop className="w-[538px] aspect-square">
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
        <header className="inner-wrapper py-[64px]">
          <h1 className="font-bold text-center text-[4rem]">
            Membangun Ekosistem Keamanan{" "}
            <span className="text-b-600">Terintegrasi</span>
          </h1>
          <h2 className="mt-[4px] text-center text-[1.5rem] text-n-700">
            MotoIndo membangun ekosistem teknologi keamanan Komunikasi, CCTV,
            dan Sensor yang terintegrasi serta komprehensif untuk berbagai
            industri.
          </h2>
          <Button isGradient={false} customClass="text-[1rem] mt-[48px]">
            Hubungi Motoindo
          </Button>
          <HeroBackgroundVideo />
        </header>
        <section className="inner-wrapper">
          <h1 className="text-b-800 font-bold text-[2.25rem] text-center max-w-[960px]">
            Implementasi keamanan <br /> dalam perkembangan industri 4.0
          </h1>
          <h2 className="mt-[24px] text-center text-n-700 text-[1.25rem]">
            Platform all-in-one menghubungkan 3 pilar keamanan secara terpusat,
            meningkatkan keamanan <br /> dan efisiensi industri
          </h2>
          <div className="mt-[60px] flex gap-[48px]">
            {signatures.map((signature, i) => (
              <div
                key={i}
                className="p-[24px] w-[360px] rounded-[12px] bg-b-100 flex flex-col items-center">
                <Image src={signature.image} alt={signature.title} />
                <p className="text-b-600 font-bold mt-[12px] mb-[8px]">
                  {signature.title}
                </p>
                <p className="text-n-700 text-[1rem] text-center">
                  {signature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-[160px] w-full justify-between bg-b-200 flex">
          <div className="flex flex-col pl-[96px] py-[64px] pr-[40px]">
            <Image src={IntegratedIcon} alt="integrated" />
            <h1 className="mt-[60px] mb-[36px] text-b-600 text-[3rem] font-semibold">
              Terintegrasi & Desentralisasi
            </h1>
            <h2 className="text-n-700 text-[1.25rem]">
              Pusat kendali menghadirkan keamanan yang lebih efisien. <br />
              Memudahkan user dalam mengawasi ruang lingkup pekerjaan sehingga
              <br />
              tercipta lingkungan yang lebih aman.
            </h2>
            <p className="mt-[60px] gap-[10px] text-[#4B65DB] text-[1.5rem] flex">
              Pelajari Lebih Lanjut <Image src={ArrowRight} alt="arrow-right" />
            </p>
          </div>
          <div className="bg-b-600 flex items-center w-[538px]">
            <IntegratedBackgroundVideo />
          </div>
        </section>
        <HomeService />
        <ArticleList />
      </div>
      <Footer />
    </section>
  );
}
