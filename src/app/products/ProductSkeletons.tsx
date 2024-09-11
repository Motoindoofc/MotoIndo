/** @format */

import 'react-loading-skeleton/dist/skeleton.css';

import Skeleton from 'react-loading-skeleton';

export default function ProductSkeletons() {
  return (
    <div className="inner-wrapper flex min-h-[500px] items-center justify-start">
      <div className="flex w-[1216px] max-w-full flex-wrap gap-8 sm:grid sm:grid-cols-2 sm:gap-4">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bg-n-100 h-[320px] w-[280px] overflow-hidden rounded-2xl sm:w-auto"
              style={{
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.06)",
              }}>
              <Skeleton className="w-full" height={180} />

              <div className="flex flex-col gap-[12px] px-[16px] py-[24px]">
                <Skeleton className="w-full" height="1rem" />

                <Skeleton className="w-full" height="1rem" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
