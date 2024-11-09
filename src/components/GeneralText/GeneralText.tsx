import { ReactNode } from "react";

type GeneralTextProps = {
  children: ReactNode;
  className?: string;
  onclick?: () => void;
};

export default function GeneralText({
  children,
  className,
  onclick,
}: GeneralTextProps) {
  return (
    <p
      className={`font-satoshi text-sm text-grey font-normal ${className || ""}`}
      onClick={onclick}
    >
      {children}
    </p>
  );
}
