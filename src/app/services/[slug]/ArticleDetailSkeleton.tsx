/** @format */

import Skeleton from "react-loading-skeleton";

export default function ArticleDetailSkeleton() {
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper flex flex-col gap-9 py-[64px]">
        <Skeleton height="4rem" width={1400} />
        <Skeleton height="4rem" width={1400} />
        <Skeleton height="1.5rem" width={800} />
        <Skeleton height="1rem" width={300} />
      </div>
      <div className="inner-wrapper mt-[64px]">
        <Skeleton
          className="max-w-full"
          width={1440}
          borderRadius={20}
          height={800}
        />
        <Skeleton className="mt-[64px] max-w-full" width={1440} height={400} />
        <Skeleton className="mt-[64px] max-w-full" width={1440} height={400} />
        <Skeleton className="mt-[64px] max-w-full" width={1440} height={400} />
      </div>
    </div>
  );
}
