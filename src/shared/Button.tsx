/** @format */

import { ReactElement, ReactNode } from "react";

interface IButton {
  children: ReactElement | ReactNode;
  onClick?: () => void;
  customClass?: string;
  isGradient?: boolean;
}

export default function Button({
  children,
  onClick,
  customClass,
  isGradient = true,
}: IButton) {
  return (
    <button
      onClick={onClick}
      className={`text-n-100 flex min-h-[52px] cursor-pointer items-center justify-center rounded-[8px] px-[1.5rem] py-[0.5rem] text-[1.25rem] ${
        isGradient ? "bg-b-gradient" : "bg-b-600"
      } ${customClass} `}
    >
      {children}
    </button>
  );
}
