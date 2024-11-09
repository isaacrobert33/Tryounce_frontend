import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
};

export default function Button({
  children,
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`text-white font-manrope text-base font-medium py-[16px] sm:py-[18px] w-full rounded-full mt-4 cursor-pointer ${className || ""}`}
    >
      {children}
    </button>
  );
}
