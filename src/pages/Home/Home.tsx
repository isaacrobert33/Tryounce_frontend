import { HomePageVideo } from "../../assets/videos/index";
import { GifImg } from "../../assets/gif/index";
import { UsersIcon } from "../../assets/svgs/index";
import { HowItWorksBg, JobPageScreenShot } from "../../assets/pngs/index";
import {
  FAQs,
  Footer,
  Header,
  Heading,
  Hero,
  HowItWorks,
  PopularService,
  Testimonial,
  VideoDivider,
} from "../../components/index";
import { SpecialHeading } from "../../components/index";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <section className="container py-20">
        <img
          src={JobPageScreenShot}
          alt="job page ss"
          className="w-full h-full object-cover object-center"
        />
      </section>

      <HowItWorks />

      <section className="container py-20 bg-black">
        <div className="flex flex-col items-start gap-[60px]">
          <SpecialHeading className="text-white !font-medium lg:!text-[64px] text-left lg:!leading-[80px]">
            Work At Your Terms, <br />
            Enjoy Every Moment
          </SpecialHeading>
          <div className="overflow-hidden">
            <video
              src={HomePageVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <VideoDivider />
      <PopularService />
      <Testimonial />

      <FAQs />

      <section
        className="container bg-center bg-cover py-20"
        style={{ backgroundImage: `url(${HowItWorksBg})` }}
      >
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-5 ">
            <div className="flex items-center gap-1">
              <img src={UsersIcon} alt="Users Icon" />
              <span className="text-white text-base">500+ Users</span>
            </div>

            <div>
              <Heading
                className="text-white !text-[30px] sm:!text-[36px]  lg:!text-[40px] tracking-wider"
                title="Start Today – Your "
              />
              <Heading
                className="text-white  !text-[30px] sm:!text-[36px]  lg:!text-[40px] tracking-wider"
                title="Next Opportunity Awaits!"
              />
            </div>
            <button className="bg-white w-[200px] rounded-full px-5 py-2 text-lg text-black">
              Create Account
            </button>
          </div>
          <div>
            <img src={GifImg} alt="GIF" />
          </div>
        </div>
      </section>

      <VideoDivider />

      <Footer />
    </>
  );
}
