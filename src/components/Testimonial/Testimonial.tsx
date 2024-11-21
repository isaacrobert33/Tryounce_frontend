import { testimonials } from "../../constants/app.constants";
import { SpecialBtn, SpecialHeading } from "../../components/index";

export default function Testimonial() {
  return (
    <section className="container py-20">
      <div className="flex flex-col items-center gap-2">
        <SpecialBtn>TESTIMONIES</SpecialBtn>
        <SpecialHeading>
          Success Stories <br />
          From Our Community
        </SpecialHeading>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mt-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 p-5 border border-[#E4E4E4] rounded-xl"
            style={{ boxShadow: "0px 1px 1px 0px #D6D5D540" }}
          >
            <img src={testimonial.ratingIcon} alt="Rating" />
            <p className="text-sm sm:text-[15px] font-medium text-[#0A1425]">
              {testimonial.testimony}
            </p>
            <div className="flex items-center gap-3">
              <img src={testimonial.userImg} alt={testimonial.name} />
              <div className="flex flex-col gap-0">
                <p className="font-medium text-base text-[#0A1425]">
                  {testimonial.name}
                </p>
                <span className="font-normal text-[13px] text-[#495057]">
                  {testimonial.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
