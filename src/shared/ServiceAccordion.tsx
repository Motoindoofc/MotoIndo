/** @format */
"use client";

import {
  useEffect,
  useRef,
  useState,
} from 'react';

import Image from 'next/image';

import ChevronRight from '@/assets/icons/chevron-right.svg';
import {
  serviceDetails,
  serviceLists,
  TServiceDetails,
} from '@/data';

export default function ServiceAccordion() {
  const [selectedService, setSelectedService] = useState<number | null>(1);

  // Properly typing the contentRefs to avoid TypeScript error
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const onClickService = (serviceId: number) => {
    setSelectedService((prevSelected) =>
      prevSelected === serviceId ? null : serviceId
    );
  };

  useEffect(() => {
    if (selectedService !== null && contentRefs.current[selectedService]) {
      // Dynamically set max-height for smooth transitions
      contentRefs.current[selectedService]!.style.maxHeight =
        contentRefs.current[selectedService]!.scrollHeight + "px";
    }

    // Reset other non-selected items
    Object.keys(contentRefs.current).forEach((id) => {
      if (
        parseInt(id) !== selectedService &&
        contentRefs.current[parseInt(id)]
      ) {
        contentRefs.current[parseInt(id)]!.style.maxHeight = "0px";
      }
    });
  }, [selectedService]);

  return (
    <div className="py-[4.5rem] px-[0.75rem]">
      <h1 className="mb-[40px] font-bold text-[2.5rem] text-n-900 text-center sm:text-[2rem]">
        Layanan fleksible menyesuaikan kebutuhan Anda
      </h1>
      <div className="flex flex-col gap-4">
        {serviceLists.map((service, i) => {
          const isSelected = selectedService === service.id;
          const selectedServiceData = serviceDetails.find(
            (s) => s.id === service.id
          ) as TServiceDetails;

          return (
            <div
              key={i}
              className={`w-full flex flex-col justify-start items-start rounded-xl cursor-pointer p-[1rem] ${
                isSelected ? "bg-b-200" : ""
              }`}
              style={{
                boxShadow:
                  "0px 2px 4px 0px rgba(15, 23, 42, 0.06), 0px 4px 6px 0px rgba(15, 23, 42, 0.10)",
              }}
              onClick={() => onClickService(service.id)}>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center bg-b-200 rounded-lg h-[48px] w-[48px]">
                  <Image src={service.image} alt={service.title} width={40} />
                </div>

                <p className="font-semibold text-n-900 text-center">
                  {service.title}
                </p>
              </div>
              <div
                ref={(el) => {
                  contentRefs.current[service.id] = el; // No return statement needed here
                }}
                className={`flex flex-col gap-4 overflow-hidden transition-all duration-500 ease-in-out ${
                  isSelected ? "pt-[8px] opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{
                  maxHeight: isSelected ? "auto" : "0px",
                  transition: "max-height 0.5s ease, opacity 0.5s ease",
                }}>
                <p className="text-[1.5rem] font-semibold">
                  {selectedServiceData.title}
                </p>
                <Image
                  className="rounded-2xl object-cover w-full"
                  width={520}
                  src={selectedServiceData.image}
                  alt={selectedServiceData.title}
                />
                <div
                  className="leading-8 text-[1rem] text-n-800"
                  dangerouslySetInnerHTML={{
                    __html: selectedServiceData.description,
                  }}
                />

                <p className="cursor-pointer text-b-600 font-semibold flex gap-1">
                  Pelajari lebih lanjut
                  <Image src={ChevronRight} alt="chevron" />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
