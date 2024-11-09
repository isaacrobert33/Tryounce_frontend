import { useForm } from "react-hook-form";
import {
  Button,
  GeneralText,
  Heading,
  Input,
  Logo,
} from "../../components/index";
import { ArrowLeft, PadlockIcon } from "../../assets/svgs/index";
import useAppNavigation from "../../hooks/navigation/useAppNavigation";

interface FormValues {
  email: string;
}

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { navigateToLogin } = useAppNavigation();

  function onSubmit(data: FormValues): void {
    console.log("Forgot Password data:", data);
  }
  return (
    <section className="container relative py-10">
      <Logo />

      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-center items-center py-10 px-2 setting">
          <img src={PadlockIcon} alt="Lock Icon" className="mb-2" />
          <Heading title="Forgot Password?" />
          <GeneralText className="!text-black">
            No worries, we&apos;ll send you reset instructions
          </GeneralText>

          <form
            className="w-full flex flex-col gap-6 mt-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              name="email"
              label="Email Address"
              placeholder="Enter Mail"
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

            <Button type="submit" className="bg-green-200">
              Reset Password
            </Button>

            <div
              onClick={() => navigateToLogin()}
              className="flex items-center justify-center gap-2 cursor-pointer"
            >
              <img src={ArrowLeft} alt="Left arrow" />
              <p className="font-manrope text-base font-bold text-black ">
                Back to Login
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
