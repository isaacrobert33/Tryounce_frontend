type BtnTextProps = {
  text1: string;
  text2: string;
  className: string;
  onClick?: () => void;
};

export default function BtnText({
  text1,
  text2,
  className,
  onClick,
}: BtnTextProps) {
  return (
    <span
      className={`flex items-center justify-center gap-1 text-xs sm:text-sm  ${className || ""}`}
    >
      <p className="font-satoshi font-normal text-black tracking-wide">
        {text1}{" "}
      </p>
      <p
        onClick={onClick}
        className="manrope font-bold text-green-200 tracking-wide cursor-pointer"
      >
        {text2}
      </p>
    </span>
  );
}
