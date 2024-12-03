import { useState } from "react";
import {
  ArrowLeft,
  MailIcon,
  VerificationSuccessfulIcon,
} from "../../assets/svgs/index";
import {
  BtnText,
  GeneralText,
  Heading,
  Logo,
  OTPVerification,
  VerificationStatus,
} from "../../components/index";
import useAppNavigation from "../../hooks/navigation/useAppNavigation";

export default function EmailVerificationCreateAccount() {
  // const [VerificationSuccessfull, setVerificationSuccessfull] = useState(false);
  const [VerificationSuccessfull, setVerificationSuccessfull] = useState(true);
  const { navigateToCreateAccount } = useAppNavigation();

  function handleCloseVerificationStatus() {
    setVerificationSuccessfull(!VerificationSuccessfull);
  }

  return (
    <section className="container relative py-10">
      <Logo />

      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-center items-center py-10 px-2 setting">
          <img
            src={MailIcon}
            alt="Lock Icon"
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] mb-2"
          />
          <Heading title="Check your email" />
          <GeneralText className="text-center">
            We&apos;ve sent a one time password to oloyed***vid10@gmail.com
          </GeneralText>
          <OTPVerification btnText="Verify" />
          <BtnText
            className="self-center mt-3"
            text1=" Didn’t receive code?"
            text2="Resend"
          />
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

      {VerificationSuccessfull ? (
        <VerificationStatus
          handleCloseVerificationStatus={handleCloseVerificationStatus}
          verificationIcon={VerificationSuccessfulIcon}
          verificationText={
            <>
              Email Verification <br /> Successful
            </>
          }
          onClick={() => navigateToCreateAccount()}
          nextStep="PROCEED TO FACE VERIFICATION"
        />
      ) : (
        <VerificationStatus
          handleCloseVerificationStatus={handleCloseVerificationStatus}
          //   unable to download verification failed icon from figma file
          verificationIcon={VerificationSuccessfulIcon}
          verificationText={
            <>
              Email Verification <br /> Failed
            </>
          }
          onClick={() => navigateToCreateAccount()}
          nextStep="TRY AGAIN"
          failed
        />
      )}
    </section>
  );
}
