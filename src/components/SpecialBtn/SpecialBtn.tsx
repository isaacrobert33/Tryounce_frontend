import React from "react";

type SpecialBtnProps = {
  children: React.ReactNode;
};

export default function SpecialBtn({ children }: SpecialBtnProps) {
  return (
    <button
      className="text-green-200 text-sm text-center bg-white rounded-[38px] px-[20px] py-[10px]"
      style={{ boxShadow: "0px 4px 4px 0px #00000005" }}
    >
      {children}
    </button>
  );
}
