import { Button } from "../../components/index";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { GeneralText } from "../../components/index";
import { useMessage } from "../../hooks/Message/MessageContext";
import useAppNavigation from "../../hooks/navigation/useAppNavigation";
import { useUserContext } from "../../hooks/UserContext/UserContext";

type OTPVerificationProps = {
  btnText: string;
  initialEmail?: string;
};

export default function OtpVerification({ btnText, initialEmail }: OTPVerificationProps) {
  const { handleSubmit, control, reset } = useForm();
  const { showMessage } = useMessage();
  const [otp, setOtp] = useState<string[]>(new Array(6).fill("")); // Update to 6 input boxes
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isResending, setIsResending] = useState<boolean>(false);
  const [email, setEmail] = useState<string | null>(initialEmail || "");
  const { navigateToLogin } = useAppNavigation();
  const ApiBaseUrl = import.meta.env.VITE_ApiBaseUrl;
  const { userEmail, setUserEmail } = useUserContext();

  useEffect(() => {
    if (otp.every((val) => val !== "")) {
      setError(""); // Clear error when all fields are filled
    }
  }, [otp]);

  function handleChange(e: ChangeEvent<HTMLInputElement>, index: number) {
    const value = e.target.value;
    if (value && isNaN(Number(value))) return false;

    setOtp([
      ...otp.map((data, indx) => (indx === index ? e.target.value : data)),
    ]);

    if (e.target.value && e.target.nextSibling) {
      const nextSibling = e.target.nextSibling as HTMLInputElement;
      nextSibling?.focus();
    }
  }

  async function onSubmit() {
    if (!userEmail) {
      setError("Please provide your email address to proceed.");
      return;
    }

    if (otp.some((val) => val === "")) {
      setError("All fields must be filled in to verify the OTP.");
      return;
    }

    setError(""); // Clear error if inputs are valid
    const otpValue = otp.join("");

    setIsLoading(true);

    try {
      const response = await axios.post(
        `${ApiBaseUrl}/api/v1/auth/users/verify/`,
        { email: userEmail, code: otpValue },
        { headers: { "Content-Type": "application/json" } }
      );

      // Access the main response data here:
      const mainResponseData = response.data;

      console.log("OTP verification successful:", mainResponseData);
      showMessage("success", "Email validated successfully");
      navigateToLogin();
    } catch (err: any) {
      const errorMessage = err.response.data.error[0].message;
      console.error("Error verifying OTP:", errorMessage);
      setError(err.response?.data?.message || "Failed to verify OTP");
      showMessage("error", errorMessage || "Failed to verify OTP");
    } finally {
      setIsLoading(false);
      setOtp(new Array(6).fill("")); // Clear OTP input fields
    }
  }

  async function handleEmailSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const emailInput = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
    if (!emailInput) {
      setError("Email is required to proceed.");
      return;
    }

    setIsResending(true);
    setEmail(emailInput)
    try {
      const response = await axios.post(
        `${ApiBaseUrl}/api/v1/auth/users/verification/resend/`,
        { email },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("OTP sent successfully", response.data);
      showMessage("success", "OTP sent successfully");
      console.log("logging the state ")
      console.log(emailInput)
      setEmail(emailInput);
      setUserEmail(emailInput);
      console.log(userEmail);
      setError("");
    } catch (err: any) {
      console.error("Error resending OTP:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Failed to resend OTP");
      showMessage("error", err.response?.data?.message || "Failed to resend OTP");
    } finally {
      setIsResending(false);
    }
  }

  return (
    <div className="w-full flex flex-col gap-6 mt-10">
      {!userEmail ? (
        <form onSubmit={handleEmailSubmit} className="flex flex-col items-center gap-4">
          <GeneralText className="text-center">
            {error ? error : "Please enter your email address to receive an OTP."}
          </GeneralText>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="border border-black px-4 py-2 rounded-md w-full max-w-md"
          />
          <Button
            type="submit"
            className={`bg-green-200 outline-none ${isResending ? "opacity-50" : ""}`}
            disabled={isResending}
          >
            {isResending ? "Sending..." : "Submit Email"}
          </Button>
        </form>
      ) : (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <p className="text-center">
            {userEmail
              ? `An OTP has been sent to ${userEmail}. Please enter it below.`
              : "Provide your email to receive an OTP."}
          </p>
          <div className="flex items-center justify-center space-x-4 md:space-x-10 w-full">
            {otp.map((_, index) => (
              <Controller
                key={index}
                name={`otp.${index}`}
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    value={otp[index]}
                    onChange={(e) => {
                      handleChange(e, index);
                      field.onChange(e);
                    }}
                    type="text"
                    maxLength={1}
                    autoComplete="off"
                    className="border text-center rounded-md w-[50px] h-[50px]"
                  />
                )}
              />
            ))}
          </div>
          {error && <p className="text-red-500 text-center text-sm">{error}</p>}
          <Button
            type="submit"
            className={`bg-green-200 outline-none ${isLoading ? "opacity-50" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? "Verifying..." : btnText}
          </Button>
        </form>
      )}
    </div>
  );
}
