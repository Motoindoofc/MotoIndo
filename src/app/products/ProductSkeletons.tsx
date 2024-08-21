/** @format */

import "react-loading-skeleton/dist/skeleton.css";

import Skeleton from "react-loading-skeleton";

export default function ProductSkeletons() {
  return (
    <div className="inner-wrapper min-h-[500px] flex items-center justify-start">
      <div className="w-[1216px] max-w-full flex flex-wrap gap-8">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="rounded-2xl w-[280px] h-[320px] bg-n-100 overflow-hidden"
              style={{
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.06)",
              }}>
              <Skeleton className="w-full" height={180} />

              <div className="py-[24px] px-[16px] flex flex-col gap-[12px]">
                <Skeleton className="w-full" height="1rem" />

                <Skeleton className="w-full" height="1rem" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
