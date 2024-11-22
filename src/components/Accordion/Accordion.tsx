import React, { useState } from "react";

type AccordionProps = {
  title: string;
  content: React.ReactNode;
  className?: string;
};

export default function Accordion({
  title,
  content,
  className,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`border-b border-[#DADADA] rounded-md ${className || ""}`}>
      <div
        className="flex justify-between items-center px-4 py-2 cursor-pointer bg-white"
        onClick={toggleAccordion}
      >
        <h3
          className={`font-medium text-black text-base ${isOpen ? "font-semibold" : ""}`}
        >
          {title}
        </h3>
        <button
          className="text-black focus:outline-none"
          aria-label={isOpen ? "Close accordion" : "Open accordion"}
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && <div className="p-4 text-[#565656] text-base">{content}</div>}
    </div>
  );
}
