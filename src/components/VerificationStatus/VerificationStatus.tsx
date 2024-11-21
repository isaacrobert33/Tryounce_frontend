import React from "react";
import { CanceIcon } from "../../assets/svgs/index";

type VerificationStatusProps = {
  verificationIcon: string;
  verificationText: React.ReactNode;
  onClick: () => void;
  handleCloseVerificationStatus: () => void;
  nextStep: string;
  failed?: boolean;
};

export default function VerificationStatus({
  verificationIcon,
  verificationText,
  onClick,
  nextStep,
  failed,
  handleCloseVerificationStatus,
}: VerificationStatusProps) {
  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-30">
      <div className="w-[300px] h-[235px] md:w-[469px] md:h-[335px] rounded-xl bg-white">
        <div className="w-full h-full flex flex-col items-center justify-between z-50">
          <div
            className="self-end cursor-pointer mt-4 mr-4"
            onClick={handleCloseVerificationStatus}
          >
            <img src={CanceIcon} alt="cancel icon" />
          </div>
          <img
            src={verificationIcon}
            alt="Verification Successful Icon"
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] mb-2"
          />
          <p className="font-manrope text-[24px] text-center leading-[37px] tracking-[-0.2px]">
            {verificationText}
          </p>
          <div onClick={onClick} className="bg-[#F8F6F7] w-full rounded-b-xl">
            <p
              className={`text-center text-xs font-bold text-green py-7 cursor-pointer ${failed ? "!text-red-500" : ""}`}
            >
              {nextStep}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
