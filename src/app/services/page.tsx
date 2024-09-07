/** @format */

import { Suspense } from "react";

import Image from "next/image";

import { serviceDetails, serviceLists } from "@/data";
import Achievement from "@/shared/Achievement";
import ArticleList from "@/shared/ArticleList";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import ServiceAccordion from "@/shared/ServiceAccordion";

import ServiceArticleScrollHandler from "./ServerArticleScrollHandler";

export default function Services() {
  return (
    <section>
      <Navbar />
      <div className="outer-wrapper">
        <div className="bg-b-gradient-2 flex w-full justify-center px-[96px] py-[80px] sm:flex-col sm:p-[1rem]">
          <div className="flex w-[1440px] max-w-full items-center justify-between gap-6 sm:flex-col">
            <div className="flex w-[636px] flex-col gap-8 sm:w-auto">
              <p className="text-n-100 mt-[2.25rem] text-[4rem] font-bold leading-tight sm:text-[2rem]">
                Layanan fleksible menyesuaikan kebutuhan Anda
              </p>
              <p className="text-n-100 text-[1.5rem] sm:text-[0.875rem]">
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
      <div className="outer-wrapper sm:hidden">
        <div className="inner-wrapper">
          {serviceLists.map((service, i) => (
            <div
              key={i}
              className="mt-[92px] flex flex-col items-center gap-10"
            >
              <p className="text-n-900 flex gap-5 text-[2rem] font-semibold">
                <Image src={service.image} alt={service.title} />
                {service.title}
              </p>
              <div className="bg-b-200 flex h-[448px] w-[1040px] gap-[40px] rounded-3xl p-[48px]">
                <div className="flex flex-col justify-center gap-[12px]">
                  <p className="text-n-900 text-[1.5rem] font-semibold">
                    {serviceDetails[i].title}
                  </p>
                  <div
                    className="text-n-800 text-[1rem] leading-8"
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
      <div className="bg-n-200 hidden sm:block">
        <ServiceAccordion />
      </div>
      <div className="outer-wrapper" id="service-article">
        <ArticleList isFull />
        <Suspense fallback={<div></div>}>
          <ServiceArticleScrollHandler />
        </Suspense>
      </div>
      <Footer />
    </section>
  );
}
