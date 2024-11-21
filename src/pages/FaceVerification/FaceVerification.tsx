import {
  ArrowLeft,
  FaceVerificationIcon,
  FaceVerificationImg,
} from "../../assets/svgs/index";
import { Button, GeneralText, Heading, Logo } from "../../components/index";
import useAppNavigation from "../../hooks/navigation/useAppNavigation";

export default function FaceVerification() {
  const { navigateToCreateAccount } = useAppNavigation();
  return (
    <section className="container relative py-10">
      <Logo />

      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-center items-center py-10 px-2 setting">
          <img
            src={FaceVerificationIcon}
            alt="Lock Icon"
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] mb-2"
          />
          <Heading title="Face Verification" />
          <GeneralText className="text-center">
            Secure Your Account with Quick Face Verification
          </GeneralText>
          <img src={FaceVerificationImg} alt="Face Verification Img" />

          <Button type="submit" className="bg-green-200">
            Continue
          </Button>

          <div
            onClick={() => navigateToCreateAccount()}
            className="flex items-center justify-center gap-1 cursor-pointer mt-2"
          >
            <img src={ArrowLeft} alt="Left arrow" />
            <p className="font-manrope text-base font-medium text-black ">
              Go back
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
