/** @format */

import {
  ReactElement,
  ReactNode,
} from 'react';

interface IButton {
  children: ReactElement | ReactNode;
  customClass?: string;
  isGradient?: boolean;
}

export default function Button({
  children,
  customClass,
  isGradient = true,
}: IButton) {
  return (
    <button
      className={`h-[52px] rounded-[8px] text-n-100 text-[1.25rem] flex justify-center items-center px-[1.5rem] ${
        isGradient ? "bg-b-gradient" : "bg-b-600"
      }  ${customClass} `}>
      {children}
    </button>
  );
}
