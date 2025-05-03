/** @format */
"use client";

import { useState } from "react";

import Image from "next/image";

import ChevronRight from "@/assets/icons/chevron-right.svg";
import { serviceDetails, serviceLists, TServiceDetails } from "@/data";

export default function HomeService() {
  const [selectedService, setSelectedService] = useState(serviceDetails[0]);

  const onClickService = (serviceId: number) => {
    const newSelected = serviceDetails.find(
      (service) => service.id === serviceId,
    ) as TServiceDetails;
    setSelectedService(newSelected);
  };

  return (
    <div className="inner-wrapper mt-[160px]">
      <h1 className="text-n-900 mb-[40px] text-center text-[2.5rem] font-bold">
        Layanan fleksibel menyesuaikan kebutuhan <br />
        Anda
      </h1>
      <div className="w-[1040px]">
        <div className="flex w-full gap-[8px]">
          {serviceLists.map((service, i) => (
            <div
              key={i}
              className={`flex w-[208px] cursor-pointer flex-col items-center justify-center gap-[8px] rounded-t-3xl pb-[12px] pt-[16px] ${
                selectedService.id == service.id ? "bg-b-200" : ""
              }`}
              onClick={() => onClickService(service.id)}
            >
              <div className="bg-b-200 h-[48px] w-[48px] rounded-lg p-[4px]">
                <Image src={service.image} alt={service.title} width={40} />
              </div>
              <p className="text-n-900 mt-[8px] text-center font-semibold">
                {service.title}
              </p>
            </div>
          ))}
        </div>
        <div
          className={`bg-b-200 flex h-[448px] w-full gap-[40px] rounded-3xl p-[48px] ${
            selectedService.id === 1 ? "rounded-tl-none" : ""
          } ${selectedService.id === 5 ? "rounded-tr-none" : ""}`}
        >
          <div className="flex flex-col justify-center gap-[12px]">
            <p className="text-n-900 text-[1.5rem] font-semibold">
              {selectedService.title}
            </p>
            <div
              className="text-n-800 text-[1rem] leading-8"
              dangerouslySetInnerHTML={{
                __html: selectedService.description,
              }}
            />
            <p className="text-b-600 flex cursor-pointer gap-1 font-semibold">
              Pelajari lebih lanjut
              <Image src={ChevronRight} alt="chevron" />
            </p>
          </div>
          <Image
            className="rounded-2xl object-cover"
            width={520}
            src={selectedService.image}
            alt={selectedService.title}
          />
        </div>
      </div>
    </div>
  );
}
