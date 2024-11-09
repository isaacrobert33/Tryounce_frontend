import { useState } from "react";
import { OnboardingType } from "../../constants/text.constants";
import {
  BtnText,
  Button,
  GeneralText,
  Heading,
  Logo,
} from "../../components/index";

import useAppNavigation from "../../hooks/navigation/useAppNavigation";

export default function Onboarding() {
  const [activeDiv, setActiveDiv] = useState<number | null>(null);

  const { navigateToCreateAccount, navigateToLogin } = useAppNavigation();

  function handleClick(index: number) {
    setActiveDiv(index);
  }

  return (
    <section className="container relative py-10">
      <div>
        <Logo />

        <div className="flex items-center justify-center">
          <div className="flex flex-col justify-center items-start gap-2 py-10 px-2 setting">
            <Heading title="Join as a Client or Talent" className="" />
            <GeneralText className="">
              Connect with top talent or find clients who need your skills.
              Select your path and start building meaningful connections.
            </GeneralText>

            <div className="w-full flex flex-col lg:items-center lg:flex-row gap-4 py-4">
              {OnboardingType.map(({ icon, description, title }, index) => (
                <div
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`flex flex-col items-start gap-4 p-4 border border-[#EAEBEB] hover:border-green-300 cursor-pointer rounded-[6px] transition-all duration-300 ease-in-out ${activeDiv === index ? "border-green-300" : ""}`}
                >
                  <img src={icon} alt="Client/Talent" />
                  <p className="font-manrope text-sm font-bold text-[#2E3031]">
                    {title}
                  </p>
                  <GeneralText className="!text-xs">{description}</GeneralText>
                </div>
              ))}
            </div>

            <Button
              className="bg-black"
              onClick={() => navigateToCreateAccount()}
            >
              Create Account
            </Button>

            <BtnText
              className="self-center"
              text1="Already have an account?"
              text2="Log In"
              onClick={() => navigateToLogin()}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
