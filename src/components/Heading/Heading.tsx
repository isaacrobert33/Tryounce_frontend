type HeadingProps = {
  title: string;
  className?: string;
};

export default function Heading({ title, className }: HeadingProps) {
  return (
    <h4
      className={`font-satoshi font-bold text-lg sm:text-xl md:text-[24px] lg:text-[30px] xl:text-[32px]  text-black tracking-tight ${className || ""}`}
    >
      {title}
    </h4>
  );
}
