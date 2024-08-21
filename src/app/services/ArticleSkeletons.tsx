/** @format */

import Skeleton from "react-loading-skeleton";

export default function ArticleSkeletons() {
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper !justify-center !flex-row flex-wrap gap-12">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="rounded-2xl w-[360px] h-[460px] overflow-hidden"
              style={{ boxShadow: "0px 4px 25.1px 0px rgba(0, 0, 0, 0.09)" }}>
              <Skeleton className="h-[260px] w-full" />
              <div className="p-[24px] flex flex-col gap-2">
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
