import { useState } from "react";
import {
  ArrowLeft,
  FaceVerificationIcon,
  VerificationSuccessfulIcon,
} from "../../assets/svgs/index";
import {
  Button,
  GeneralText,
  Heading,
  Logo,
  VerificationStatus,
} from "../../components/index";
import useAppNavigation from "../../hooks/navigation/useAppNavigation";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

export default function FaceVerificationProcess() {
  const [faceVerificationSuccessful, setFaceVerificationSuccessful] =
    useState(false);

  function handleCloseVerificationStatus() {
    setFaceVerificationSuccessful(!faceVerificationSuccessful);
    enablePageScroll();
  }
  const { navigateToCreateAccount } = useAppNavigation();
  return (
    <section className="container relative py-10">
      <Logo />

      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-center items-center py-10 px-2 setting gap-4">
          <img
            src={FaceVerificationIcon}
            alt="Lock Icon"
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
          />
          <Heading title="Face Verification" />

          {/* Verifcation ring */}
          <div className="h-[150px] w-[150px] md:w-[200px] md:h-[200px] border border-black rounded-full" />

          <GeneralText className="text-center">
            Please align your face within the frame and capture a clear photo{" "}
            <br />
            for face verification purposes.
          </GeneralText>

          <Button
            onClick={() => {
              setFaceVerificationSuccessful(true);
              disablePageScroll();
            }}
            type="submit"
            className="bg-green-200"
          >
            Verify
          </Button>

          <div
            onClick={() => navigateToCreateAccount()}
            className="flex items-center justify-center gap-1 cursor-pointer"
          >
            <img src={ArrowLeft} alt="Left arrow" />
            <p className="font-manrope text-base font-medium text-black ">
              Go back
            </p>
          </div>
        </div>
      </div>

      {faceVerificationSuccessful && (
        <VerificationStatus
          handleCloseVerificationStatus={handleCloseVerificationStatus}
          verificationIcon={VerificationSuccessfulIcon}
          verificationText={
            <>
              Face Verification <br /> Successful
            </>
          }
          onClick={() => navigateToCreateAccount()}
          nextStep="PROCEED TO FACE VERIFICATION"
        />
      )}
    </section>
  );
}
