import React from "react";
import { motion } from "framer-motion";
type SpecialHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SpecialHeading({
  children,
  className,
}: SpecialHeadingProps) {
  return (
    <motion.h1
      className={`font-semibold text-[24px] sm:text-[30px] md:text-[36px] lg:text-[52px] text-black text-center tracking-[-1px] leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px] ${className || ""}`}
    >
      {children}
    </motion.h1>
  );
}
