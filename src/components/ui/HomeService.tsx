/** @format */
"use client";

import { useState } from 'react';

import Image from 'next/image';

import ChevronRight from '@/assets/icons/chevron-right.svg';
import {
  serviceDetails,
  serviceLists,
  TServiceDetails,
} from '@/data';

export default function HomeService() {
  const [selectedService, setSelectedService] = useState(serviceDetails[0]);

  const onClickService = (serviceId: number) => {
    const newSelected = serviceDetails.find(
      (service) => service.id === serviceId
    ) as TServiceDetails;
    setSelectedService(newSelected);
  };

  return (
    <div className="inner-wrapper mt-[160px]">
      <h1 className="mb-[40px] font-bold text-[2.5rem] text-n-900 text-center">
        Layanan fleksible menyesuaikan kebutuhan <br />
        Anda
      </h1>
      <div className="w-[1040px]">
        <div className="flex gap-[8px] w-full">
          {serviceLists.map((service, i) => (
            <div
              key={i}
              className={`w-[208px] pt-[16px] pb-[12px] flex flex-col gap-[8px] justify-center items-center rounded-t-3xl cursor-pointer ${
                selectedService.id == service.id ? "bg-b-200" : ""
              }`}
              onClick={() => onClickService(service.id)}>
              <div className="p-[4px] bg-b-200 rounded-lg h-[48px] w-[48px]">
                <Image src={service.image} alt={service.title} width={40} />
              </div>
              <p className="font-semibold text-n-900 mt-[8px] text-center">
                {service.title}
              </p>
            </div>
          ))}
        </div>
        <div
          className={`flex gap-[40px] p-[48px] w-full bg-b-200 h-[448px] rounded-3xl ${
            selectedService.id === 1 ? "rounded-tl-none" : ""
          } ${selectedService.id === 5 ? "rounded-tr-none" : ""}`}>
          <div className="flex flex-col justify-center gap-[12px]">
            <p className="text-n-900 font-semibold text-[1.5rem]">
              {selectedService.title}
            </p>
            <div
              className="leading-8 text-[1rem] text-n-800"
              dangerouslySetInnerHTML={{
                __html: selectedService.description,
              }}
            />
            <p className="text-b-600 font-semibold flex gap-1">
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
