import { useState } from "react";
import {
  RegisterOptions,
  UseFormRegister,
  FieldError,
  FieldErrors,
} from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

type InputProps = {
  label: string;
  placeholder?: string;
  type?: string;
  name: string;
  htmlFor?: string;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  errors?: FieldErrors;
  onChange?: () => void;
  className?: string;
};

export default function Input({
  label,
  placeholder,
  type = "text",
  name,
  register,
  htmlFor,
  rules,
  errors,
  onChange,
  className,
}: InputProps) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setPasswordVisible(!isPasswordVisible);
  }

  return (
    <div>
      {type === "checkbox" ? (
        <>
          <div className="flex items-center gap-2 sm:gap-3">
            <input
              type={type}
              id={htmlFor}
              className={`custom-checkbox  ${className || ""}`}
              {...register(name, rules)}
              onChange={onChange}
            />
            <label
              htmlFor={htmlFor}
              className="font-satoshi font-medium text-xs sm:text-base text-grey-100"
            >
              {label}
            </label>
          </div>

          {/* <div>
            {errors && errors[name] && (
              <p className="text-red-500 text-sm">
                {(errors[name] as FieldError).message}
              </p>
            )}
          </div> */}
        </>
      ) : (
        <>
          <label
            className="font-manrope font-medium text-base text-[#1a1a1a]"
            htmlFor={htmlFor}
          >
            {label}
          </label>
          <div className="relative">
            <input
              className={`w-full border border-[#E0DADB] rounded-full py-4 px-5 mt-2 text-base font-manrope font-normal text-black bg-transparent placeholder:text-sm placeholder:font-normal placeholder:text-[#A6A6A6] placeholder:tracking-[1px] focus:outline-none focus:border-green-200 ${className || ""}`}
              placeholder={placeholder}
              type={isPasswordVisible && type === "password" ? "text" : type}
              id={htmlFor}
              {...register(name, rules)}
            />
            {type === "password" && (
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-5 top-[55%] -translate-y-1/2 text-xl cursor-pointer text-gray-500"
              >
                {isPasswordVisible ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </span>
            )}
          </div>
          {errors && errors[name] && (
            <p className="text-red-500 text-sm">
              {(errors[name] as FieldError).message}
            </p>
          )}
        </>
      )}
    </div>
  );
}
