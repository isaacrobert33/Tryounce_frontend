import React from "react";

type AuthenticationButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  icon?: string;
  className?: string;
  iconAlt?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

export default function AuthenticationButton({
  children,
  onClick,
  icon,
  className,
  iconAlt = "Authentication Icon",
  type,
}: AuthenticationButtonProps) {
  return (
    <button
      className={`flex items-center justify-center gap-4 py-[16px] border border-grey-100 rounded-full text-base font-medium text-[#2E3031] w-full ${className || ""}`}
      onClick={onClick}
      type={type}
    >
      {icon && <img src={icon} alt={iconAlt} />}
      {children}
    </button>
  );
}
