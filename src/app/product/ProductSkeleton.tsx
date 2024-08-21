/** @format */

import Skeleton from "react-loading-skeleton";

export default function ProductSkeleton() {
  return (
    <div className="py-[36px] outer-wrapper">
      <div className="inner-wrapper !items-start">
        <Skeleton height={60} width={400} />
      </div>
      <div className="inner-wrapper mt-[20px] !flex-row !items-start flex gap-8 w-full ">
        <Skeleton height={600} width={700} />
        <div className="w-[50%] h-[698px] flex flex-col gap-3">
          <Skeleton height={80} className="w-full" />
          <Skeleton className="h-full" width={200} />

          <div className="h-[520px]  overflow-y-none">
            <Skeleton className="h-full w-full" />
          </div>
          <Skeleton className="w-full" height={100} />
        </div>
      </div>
    </div>
  );
}
