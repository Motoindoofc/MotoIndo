/** @format */

import Skeleton from "react-loading-skeleton";

export default function ProductSkeleton() {
  return (
    <div className="outer-wrapper py-[36px]">
      <div className="inner-wrapper !items-start">
        <Skeleton height={60} width={400} />
      </div>
      <div className="inner-wrapper mt-[20px] flex w-full !flex-row !items-start gap-8">
        <Skeleton height={600} width={700} />
        <div className="flex h-[698px] w-[50%] flex-col gap-3">
          <Skeleton height={80} className="w-full" />
          <Skeleton className="h-full" width={200} />

          <div className="overflow-y-none h-[520px]">
            <Skeleton className="h-full w-full" />
          </div>
          <Skeleton className="w-full" height={100} />
        </div>
      </div>
    </div>
  );
}
