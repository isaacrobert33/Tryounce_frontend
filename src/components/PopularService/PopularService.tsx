import { SpecialHeading } from "../../components/index";
import { popularService } from "../../constants/app.constants";

export default function PopularService() {
  return (
    <section id="categories" className="container py-40">
      <div className="relative">
        <SpecialHeading>Popular Services</SpecialHeading>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 mt-10">
          {popularService.map((service, index) => (
            <div
              key={index}
              className="flex flex-col gap-10 p-5 border border-[#ECECEC] rounded-xl"
              style={{ boxShadow: "0px 1px 1px 0px #D6D5D540" }}
            >
              <img
                src={service.icon}
                alt={service.service}
                width={35}
                height={35}
              />
              <p className="text-[16px] sm:text-[18px] font-medium text-[#000]">
                {service.service}
              </p>
            </div>
          ))}
        </div>

        <button className="absolute left-[50%] transform -translate-x-1/2 mt-16 text-base px-7 py-2 sm:text-[18px] font-medium text-[#000] rounded-full bg-white border border-[#000]">
          View All
        </button>
      </div>
    </section>
  );
}
