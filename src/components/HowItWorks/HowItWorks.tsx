import { howItWorks } from "../../constants/app.constants";
import { SpecialBtn, SpecialHeading } from "../../components/index";

export default function HowItWorks() {
  return (
    <section className="container py-20">
      <div className="flex flex-col items-center gap-2">
        <SpecialBtn>HOW IT WORKS</SpecialBtn>
        <SpecialHeading>What's Possible with Ounce?</SpecialHeading>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {howItWorks.map((offer, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 p-5 border border-[#E0E0E0] rounded-xl"
            style={{ boxShadow: "0px 1px 1px 0px #D6D5D540" }}
          >
            <img src={offer.img} alt="Rating" />

            <div className="flex flex-col gap-2">
              <p className="text-lg sm:text-[22px] font-semibold text-[#000]">
                {offer.title}
              </p>
              <span className="text-[#787676]  text-base">
                {offer.description}{" "}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
