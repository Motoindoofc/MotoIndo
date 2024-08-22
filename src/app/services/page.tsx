/** @format */

import Image from "next/image";

import { serviceDetails, serviceLists } from "@/data";
import Achievement from "@/shared/Achievement";
import ArticleList from "@/shared/ArticleList";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";

import ServiceArticleScrollHandler from "./ServerArticleScrollHandler";

export default function Services() {
  return (
    <section>
      <Navbar />
      <div className="outer-wrapper">
        <div className="w-full bg-b-gradient-2 px-[96px] py-[80px] flex justify-center">
          <div className="w-[1440px] flex justify-between items-center gap-6">
            <div className="w-[636px] flex flex-col gap-8">
              <p className="text-n-100 font-bold text-[4rem] leading-tight">
                Layanan fleksible menyesuaikan kebutuhan Anda
              </p>
              <p className="text-n-100 text-[1.5rem]">
                Sejak 2008 Motoindo dipercaya dalam komunikasi radio dan
                keamanan.
                <br /> Kami dapat melayani sesuai kebutuhan anda agar tercipta
                hasil yang efisien, cepat dan tepat.
              </p>
            </div>
            <Achievement />
          </div>
        </div>
      </div>
      <div className="outer-wrapper">
        <div className="inner-wrapper">
          {serviceLists.map((service, i) => (
            <div
              key={i}
              className="mt-[92px] flex flex-col items-center gap-10">
              <p className="flex gap-5 text-n-900 font-semibold text-[2rem]">
                <Image src={service.image} alt={service.title} />
                {service.title}
              </p>
              <div className="w-[1040px] flex gap-[40px] p-[48px] bg-b-200 h-[448px] rounded-3xl">
                <div className="flex flex-col justify-center gap-[12px]">
                  <p className="text-n-900 font-semibold text-[1.5rem]">
                    {serviceDetails[i].title}
                  </p>
                  <div
                    className="leading-8 text-[1rem] text-n-800"
                    dangerouslySetInnerHTML={{
                      __html: serviceDetails[i].description,
                    }}
                  />
                </div>
                <Image
                  className="rounded-2xl object-cover"
                  width={520}
                  src={serviceDetails[i].image}
                  alt={serviceDetails[i].title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="outer-wrapper" id="service-article">
        <ArticleList isFull />
        <ServiceArticleScrollHandler />
      </div>
      <Footer />
    </section>
  );
}
