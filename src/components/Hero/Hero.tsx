import { SpecialHeading } from "../../components/index";

export default function Hero() {
  return (
    <section className="container py-20 flex items-center justify-center mt-10">
      <div className="flex flex-col items-center gap-5">
        <button
          className="text-black text-[13px] text-center bg-white border border-[#CECCCC70] rounded-[38px] px-[20px] py-[10px]"
          style={{ boxShadow: "0px 4px 2px 0px #00000005" }}
        >
          Join Thousands of Freelancers Today
        </button>
        <SpecialHeading className="text-black !font-semibold lg:!text-[64px] text-left lg:!leading-[87px]">
          Work without limits, <br />
          Grow without borders.
        </SpecialHeading>
        <p className="text-[#6C6C6C] font-normal text-base sm:text-xl text-center">
          Where talents and the world collaborate, grow and thrive together
        </p>
        <button className="bg-black text-white rounded-full px-5 py-3 cursor-pointer leading-[22px] text-center">
          Create Account
        </button>
      </div>
    </section>
  );
}
