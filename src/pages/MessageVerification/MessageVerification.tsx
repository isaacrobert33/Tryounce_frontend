import { MailIcon } from "../../assets/svgs/index";
import {
  BtnText,
  GeneralText,
  Heading,
  Logo,
  OTPVerification,
} from "../../components/index";

export default function MessageVerification() {
  return (
    <section className="container relative py-10">
      <Logo />

      <div className="flex items-center justify-center mt-5">
        <div className="flex flex-col justify-center items-center py-10 px-2 setting">
          <img
            src={MailIcon}
            alt="Lock Icon"
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] mb-2"
          />
          <Heading title="Check your messages" />
          <GeneralText className="text-center">
            We&apos;ve sent a one time password to +2347044384834
          </GeneralText>
          <OTPVerification btnText="Verify" />
          <BtnText
            className="self-center mt-3"
            text1=" Didn’t receive code?"
            text2="Resend"
          />
        </div>
      </div>
    </section>
  );
}
