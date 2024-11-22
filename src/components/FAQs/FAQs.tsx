import { accordions } from "../../constants/app.constants";
import { SpecialBtn, SpecialHeading, Accordion } from "../../components/index";

export default function FAQs() {
  return (
    <section className="container py-10 pb-20">
      <div className="flex flex-col items-center gap-3">
        <SpecialBtn>FREQUENTLY ASKED QUESTIONS</SpecialBtn>
        <SpecialHeading>Got questions? We&apos;ve got answers!</SpecialHeading>
        {/* <div className="flex items-center  gap-2 mt-5">
          <button className="text-white text-sm px-5 py-[6px] sm:px-7 sm:py-2 sm:text-[18px] font-medium rounded-full bg-black border border-[#000]">
            Freelancers
          </button>
          <button className="text-sm px-5 py-[6px] sm:px-7 sm:py-2 sm:text-[18px] font-medium text-[#000] rounded-full bg-white border border-[#000]">
            Clients
          </button>
          <button className="text-sm px-5 py-[6px] sm:px-7 sm:py-2 sm:text-[18px] font-medium text-[#000] rounded-full bg-white border border-[#000]">
            Businesses
          </button>
        </div> */}
      </div>

      <div className="flex flex-col gap-20 items-start md:flex-row md:justify-between mt-20">
        <div className="flex flex-col gap-5 w-full md:w-[35%] border border-[#E5E5E5D6] rounded-xl p-5">
          <img src="" alt="" />
          <h4>Have Questions? Reach out to us!</h4>
          <p>
            We're here to help with any queries you may have. Get in touch with
            our support team, and we'll be happy to assist you.
          </p>
          <button className="text-white self-start  text-sm px-5 py-[6px] sm:px-6 sm:py-2 sm:text-[18px] font-medium rounded-full bg-black border border-[#000]">
            Contact Support Team
          </button>
        </div>
        <div className="w-full md:w-[50%] space-y-4">
          {accordions.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    </section>
  );
}
