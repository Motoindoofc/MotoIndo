/** @format */

import {
  ReactElement,
  ReactNode,
} from 'react';

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
      className={`min-h-[52px] rounded-[8px] text-n-100 text-[1.25rem] flex justify-center items-center px-[1.5rem] py-[0.5rem] cursor-pointer ${
        isGradient ? "bg-b-gradient" : "bg-b-600"
      }  ${customClass} `}>
      {children}
    </button>
  );
}
