import { useEffect, useRef, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { Logo } from "../../components/index";
import { navLinks } from "../../constants/app.constants";

export default function Header() {
  const [openNavigation, setOpenNavigation] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeNavigation();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle the menu open/close
  function toggleNavigation() {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  }

  function closeNavigation() {
    setOpenNavigation(false);
    enablePageScroll();
  }

  const handleClick = () => {
    // if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };
  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-center z-20 bg-white border  border-[#D2D2D2]">
      <header className="container py-4 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-5 lg:gap-7">
          {navLinks.map((nav, index) => (
            <a
              key={index}
              href={nav.path}
              className="text-grey-200 font-normal text-base"
            >
              {nav.pathname}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5 lg:gap-10">
          <input
            type="text"
            placeholder="Search Jobs, Talents, Projects"
            className="outline-none text-sm pl-3 pr-3 md:pr-10 py-1 border border-[#D2D2D2] rounded-full placeholder:text-grey-200 placeholder:text-xs placeholder:font-normal placeholder:leading-[19px] placeholder:text-left"
          />

          <Link to="" className="hidden lg:block text-black text-base">
            Find Jobs
          </Link>

          <button className="hidden lg:block bg-black text-white rounded-full px-5 py-3 cursor-pointer leading-[22px]">
            Find Talents
          </button>
        </div>

        <div
          className="lg:hidden text-2xl cursor-pointer"
          onClick={toggleNavigation}
        >
          <IoMdMenu />
        </div>

        {/* Mobile Slide-in Menu */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 w-[85%] h-full bg-[#f3fdf5] bg-opacity-60 backdrop-blur-[20px] z-50 transform transition-transform duration-300 ease-in-out ${
            openNavigation ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <div
            onClick={toggleNavigation}
            className="absolute top-5 right-6 text-2xl cursor-pointer"
          >
            <IoMdClose />
          </div>

          <nav className="flex flex-col items-center mt-[10rem] space-y-8 w-full">
            {navLinks.map((nav, index) => (
              <a
                key={index}
                href={nav.path}
                className="text-grey-200 font-normal text-base"
                onClick={handleClick}
              >
                {nav.pathname}
              </a>
            ))}

            <Link to="" className="text-black text-base">
              Find Jobs
            </Link>

            <button className=" bg-black text-white rounded-full px-5 py-3 cursor-pointer leading-[22px]">
              Find Talents
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
}
