import {
  ArrowLeft,
  PasswordResetSuccessfulIcon,
} from "../../assets/svgs/index";
import { Button, GeneralText, Heading, Logo } from "../../components/index";
import useAppNavigation from "../../hooks/navigation/useAppNavigation";

export default function PasswordResetSuccessful() {
  const { navigateToLogin } = useAppNavigation();
  return (
    <section className="container relative py-10">
      <Logo />
      <div className="flex items-center justify-center mt-5">
        <div className="flex flex-col justify-center items-center py-10 px-2 setting">
          <img
            src={PasswordResetSuccessfulIcon}
            alt="Lock Icon"
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] mb-2"
          />
          <Heading className="text-center" title="Password Reset Successful" />
          <GeneralText className="text-center">
            Your password has been reset successfully. Click continue to login
            magically
          </GeneralText>
          <div className="w-full mt-1">
            <Button type="submit" className="bg-green-200">
              Continue
            </Button>
            <div
              onClick={() => navigateToLogin()}
              className="flex items-center justify-center gap-2 cursor-pointer mt-3"
            >
              <img src={ArrowLeft} alt="Left arrow" />
              <p className="font-manrope text-base font-bold text-black ">
                Back to Login
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
