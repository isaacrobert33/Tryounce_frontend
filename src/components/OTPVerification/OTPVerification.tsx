import { Button } from "../../components/index";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

type OTPVerificationProps = {
  btnText: string;
};

export default function OtpVerification({ btnText }: OTPVerificationProps) {
  const { handleSubmit, control, reset } = useForm();

  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (otp.every((val) => val !== "")) {
      setError(""); // Clear error when all fields are filled
    }
  }, [otp]);

  function handleChange(e: ChangeEvent<HTMLInputElement>, index: number) {
    const value = e.target.value;
    if (value && isNaN(Number(value))) return false;

    // Update OTP state
    setOtp([
      ...otp.map((data, indx) => (indx === index ? e.target.value : data)),
    ]);

    // Automatically focus on the next input
    if (e.target.value && e.target.nextSibling) {
      const nextSibling = e.target.nextSibling as HTMLInputElement;
      nextSibling?.focus();
    }
  }

  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    const value = e.clipboardData.getData("text");
    if (value && isNaN(Number(value))) return false;

    const updatedValue = value.toString().split("").slice(0, otp.length);
    setOtp(updatedValue);

    // To Remove focus when you paste
    // const focusedInput = (
    //   e.target as HTMLInputElement
    // ).parentNode?.querySelector("input:focus");
    // if (focusedInput) {
    //   (focusedInput as HTMLInputElement).blur();
    // }

    const lastInput = (e.target as HTMLInputElement).parentNode?.querySelector(
      'input[type="text"]:last-child'
    );
    if (lastInput) {
      (lastInput as HTMLInputElement).focus();
    }
  }

  function handleOnKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) {
    if (e.key === "Backspace" && !otp[index]) {
      // If the current input is empty, move focus to the previous input
      if (index > 0) {
        const prevInput = e.currentTarget.parentElement?.children[
          index - 1
        ] as HTMLInputElement;
        prevInput.focus();
        setOtp((prev) =>
          prev.map((val, indx) => (indx === index - 1 ? "" : val))
        );
      }
    } else if (e.key === "Backspace") {
      // Delete the current input's value
      setOtp((prev) => prev.map((val, indx) => (indx === index ? "" : val)));
    }
  }

  function onSubmit(data: any) {
    // Check if any input is empty
    if (otp.some((val) => val === "")) {
      setError("All fields must be filled in to verify the OTP.");
      return;
    }

    setError(""); // Clear error if inputs are valid
    console.log("OTP Entered from Form: ", data.otp);
    console.log("OTP Joined: ", otp.join(""));

    // After submission, clear the OTP input fields
    reset(); // use react hook form reset function(not working)
    setOtp(new Array(4).fill("")); // Optionally clear state-based OTP too
  }

  return (
    <form
      className="w-full flex flex-col gap-6 mt-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center justify-center space-x-4 md:space-x-10 w-full">
        {otp.map((_, index) => (
          <Controller
            key={index}
            name={`otp.${index}`} // Controller name tied to index
            control={control}
            render={({ field }) => (
              <input
                {...field}
                value={otp[index]} // Use otp state for value
                onChange={(e) => {
                  handleChange(e, index);
                  field.onChange(e); // Update React Hook Form
                }}
                onPaste={(e) => handlePaste(e)}
                onKeyDown={(e) => handleOnKeyDown(e, index)}
                type="text" //can also use password
                maxLength={1}
                autoComplete="off"
                className="border border-black font-manrope text-[24px] sm:text-[27px] font-medium text-black leading-[18px] outline-none text-center w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full focus:border focus:border-green"
              />
            )}
          />
        ))}
      </div>

      {error && <p className="text-red-500 text-center text-sm">{error}</p>}

      <Button type="submit" className="bg-green-200 outline-none">
        {btnText}
      </Button>
    </form>
  );
}
