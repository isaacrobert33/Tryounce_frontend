import { footerLinks } from "../../constants/app.constants";
import { Logo } from "../../components/index";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section className=" flex flex-col items-center justify-center gap-10 pt-20 pb-10">
      <footer className="container flex flex-col md:flex-row items-start justify-between flex-wrap mb-10">
        <Logo />

        {footerLinks.map((footerLink) => (
          <div key={footerLink.section} className="flex flex-col gap-5">
            <h4 className="capitalize font-semibold text-[20px] leading-[36px]">
              {footerLink.section}
            </h4>
            <div className="flex flex-col gap-6">
              {footerLink.links.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="text-[18px] text-[#474343] leading-[27px]"
                >
                  {link.pathname}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </footer>

      <div className="container">
        <div className="container w-full h-[1px] bg-[#A3A3A3]" />
      </div>

      <p className="text-black text-center font-normal text-sm leading-[14px]">{` © ${currentYear} Ounce. All Rights Reserved.`}</p>
    </section>
  );
}
