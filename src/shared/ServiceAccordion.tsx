/** @format */
"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import ChevronRight from "@/assets/icons/chevron-right.svg";
import { serviceDetails, serviceLists, TServiceDetails } from "@/data";

export default function ServiceAccordion() {
  const [selectedService, setSelectedService] = useState<number | null>(1);

  // Properly typing the contentRefs to avoid TypeScript error
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const onClickService = (serviceId: number) => {
    setSelectedService((prevSelected) =>
      prevSelected === serviceId ? null : serviceId,
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
    <div className="px-[0.75rem] py-[4.5rem]">
      <h1 className="text-n-900 mb-[40px] text-center text-[2.5rem] font-bold sm:text-[2rem]">
        Layanan fleksible menyesuaikan kebutuhan Anda
      </h1>
      <div className="flex flex-col gap-4">
        {serviceLists.map((service, i) => {
          const isSelected = selectedService === service.id;
          const selectedServiceData = serviceDetails.find(
            (s) => s.id === service.id,
          ) as TServiceDetails;

          return (
            <div
              key={i}
              className={`flex w-full cursor-pointer flex-col items-start justify-start rounded-xl p-[1rem] ${
                isSelected ? "bg-b-200" : "bg-white"
              }`}
              style={{
                boxShadow:
                  "0px 2px 4px 0px rgba(15, 23, 42, 0.06), 0px 4px 6px 0px rgba(15, 23, 42, 0.10)",
              }}
              onClick={() => onClickService(service.id)}
            >
              <div className="flex items-center gap-2">
                <div className="bg-b-200 flex h-[48px] w-[48px] items-center justify-center rounded-lg">
                  <Image src={service.image} alt={service.title} width={40} />
                </div>

                <p className="text-n-900 text-center font-semibold">
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
                }}
              >
                <p className="text-[1.5rem] font-semibold">
                  {selectedServiceData.title}
                </p>
                <Image
                  className="w-full rounded-2xl object-cover"
                  src={selectedServiceData.image}
                  alt={selectedServiceData.title}
                />
                <div
                  className="text-n-800 text-[1rem] leading-8"
                  dangerouslySetInnerHTML={{
                    __html: selectedServiceData.description,
                  }}
                />

                <p className="text-b-600 flex cursor-pointer gap-1 font-semibold">
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
