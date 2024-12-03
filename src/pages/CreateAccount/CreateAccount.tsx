import { AppleIcon, CallIcon, GoogleIcon } from "../../assets/svgs/index";
import { useForm } from "react-hook-form";
import axios from 'axios'
import {
  AuthenticationButton,
  BtnText,
  Button,
  Divider,
  GeneralText,
  Heading,
  Input,
  Logo,
} from "../../components/index";
import { useState } from "react";
import useAppNavigation from "../../hooks/navigation/useAppNavigation";
import { Loader } from "../../components/index";
import { useMessage } from "../../hooks/Message/MessageContext";

interface FormValues {
  email: string;
  phoneNumber: string;
  password: string;
  isIndividual: boolean;
  isGroup: boolean;
}

export default function CreateAccount() {
  const { showMessage } = useMessage();
  const [checkboxError, setCheckboxError] = useState<string | null>(null);
  const { navigateToLogin } = useAppNavigation();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  async function onSubmit(data: FormValues): Promise<void> {
    
    if (!data.isIndividual && !data.isGroup) {
      setCheckboxError("Please select one of the options.");
    } else if (data.isIndividual && data.isGroup) {
      setCheckboxError("Only one option can be selected.");
    } else {
      setCheckboxError(null);
      const apiEndpoint =import.meta.env.BASE_URL + "/api/v1/auth/register/talent/";

      if (data.isIndividual) {
        try {
          setLoading(true);

          const response = await axios.post(
            apiEndpoint,
            {
              email: data.email,
              phone_number: data.phoneNumber,
              password: data.password,
            },
            { headers: { "Content-Type": "application/json" } }
          );
          console.log(response);
          
          if (response.data.success) {
            console.log("account created");
            
            showMessage("success", "Account created successfully");
            navigateToLogin()
          } else {
            showMessage("error", response.data.message || "Account creation failed.");
            console.error("Account creation failed:", response.data);
          }
        } catch (error: any) {
          if (error.response && error.response.data) {
            const errorMessage = error.response.data.email || error.response.data.message || "An unexpected error occurred.";
            showMessage("error", errorMessage);
          } else {
            console.error("Unknown error:", error);
            showMessage("error", "An error occurred while creating your account.");
          }
        } finally {
          setLoading(false);
        }
      } else {
        showMessage("error", "Group account creation is currently unavailable. Please try again later.");
      }
    }
  }

  function handleCheckboxChange(name: string) {
    setCheckboxError(null);
    if (name === "isIndividual") {
      setValue("isGroup", false);
    } else if (name === "isGroup") {
      setValue("isIndividual", false);
    }
  }

  return (
    <section className="container relative py-10">
      <div className="flex items-center justify-between">
        <Logo />
        <p className=" text-base text-[#858585]">
          Hire talent.{" "}
          <span className="font-semibold sm:font-bold text-green-200">
            Join as a Client
          </span>
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-center items-start py-10 px-2 setting">
          <Heading title="Create Account" className="" />
          <GeneralText className="">
            Provide details to create an account.
          </GeneralText>

          <form
            className="w-full flex flex-col gap-6 mt-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <div className="flex items-center gap-12 sm:gap-20">
                <Input
                  name="isIndividual"
                  label="As an Individual"
                  htmlFor="individual"
                  register={register}
                  type="checkbox"
                  errors={errors}
                  onChange={() => handleCheckboxChange("isIndividual")}
                />

                <Input
                  name="isGroup"
                  label="As a group"
                  htmlFor="group"
                  register={register}
                  type="checkbox"
                  errors={errors}
                  onChange={() => handleCheckboxChange("isGroup")}
                />
              </div>
              {checkboxError && (
                <p className="text-red-500 text-sm mt-2">{checkboxError}</p>
              )}
            </div>

            <div className="flex flex-col gap-6">
              <AuthenticationButton
                icon={CallIcon}
                onClick={() => console.log("Hello")}
                type="button"
              >
                Continue with Mobile Number
              </AuthenticationButton>

              <AuthenticationButton
                icon={GoogleIcon}
                onClick={() => console.log("Hello")}
                type="button"
              >
                Continue with Google
              </AuthenticationButton>

              <AuthenticationButton
                icon={AppleIcon}
                onClick={() => console.log("Hello")}
                type="button"
              >
                Continue with Apple
              </AuthenticationButton>
            </div>

            <Divider />

            <Input
              name="email"
              label="Email"
              placeholder="email"
              register={register}
              type="email"
              htmlFor="email"
              rules={{
                required: "Email is required.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email address.",
                },
              }}
              errors={errors}
            />

            <Input
              name="phoneNumber"
              label="Phone Number"
              placeholder="+234 704 438 4834"
              register={register}
              type="text"
              htmlFor="phone"
              rules={{
                required: "Phone number is required.",
                minLength: {
                  value: 10,
                  message: "Phone number is too short.",
                },
                maxLength: {
                  value: 15,
                  message: "Phone number is too long.",
                },
                pattern: {
                  value: /^\+?[0-9]{10,15}$/,
                  message: "Please enter a valid phone number.",
                },
              }}
              errors={errors}
            />

            <Input
              name="password"
              label="Password"
              placeholder="Password"
              register={register}
              type="password"
              htmlFor="password"
              rules={{
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters.",
                },
                maxLength: {
                  value: 20,
                  message: "Password must be no more than 20 characters.",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must include uppercase, lowercase, number, and special character.",
                },
              }}
              errors={errors}
            />

            <Button type="submit" className="bg-green-200">
              {loading ? <Loader width="20" height="20" color="white" /> : "Create Account"}
            </Button>

            <BtnText
              className="self-center"
              text1="Already have an account?"
              text2="Log In"
              onClick={() => navigateToLogin()}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
