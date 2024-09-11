/** @format */

import Skeleton from "react-loading-skeleton";

export default function ArticleSkeletons() {
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper !flex-row flex-wrap !justify-center gap-12">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="h-[460px] w-[360px] overflow-hidden rounded-2xl"
              style={{ boxShadow: "0px 4px 25.1px 0px rgba(0, 0, 0, 0.09)" }}>
              <Skeleton className="h-[260px] w-full" />
              <div className="flex flex-col gap-2 p-[24px]">
                <Skeleton height="2.5rem" />
                <Skeleton height="2.5rem" />
                <Skeleton height="2.5rem" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
