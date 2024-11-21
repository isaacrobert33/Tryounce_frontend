import { useForm } from "react-hook-form";
import { ArrowLeft, PadlockIcon } from "../../assets/svgs/index";
import {
  Button,
  GeneralText,
  Heading,
  Input,
  Logo,
} from "../../components/index";
import useAppNavigation from "../../hooks/navigation/useAppNavigation";

interface FormValues {
  password: string;
  confirmPassword: string;
}

export default function NewPassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  // Watch password to validate confirmPassword against it
  const password = watch("password");

  function onSubmit(data: FormValues): void {
    console.log("New Password Submitted:", data);
  }

  const { navigateToLogin } = useAppNavigation();

  return (
    <section className="container relative py-10">
      <Logo />

      <div className="flex items-center justify-center mt-5">
        <div className="flex flex-col justify-center items-center py-10 px-2 setting">
          <img
            src={PadlockIcon}
            alt="Lock Icon"
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] mb-2"
          />
          <Heading title="Set a new Password" />
          <GeneralText className="text-center">
            Choose a new password
          </GeneralText>
          <form
            className="w-full flex flex-col gap-6 mt-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              name="password"
              label="New Password"
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
                // pattern: {
                //   value:
                //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                //   message:
                //     "Password must include uppercase, lowercase, number, and special character.",
                // },
              }}
              errors={errors}
            />

            {/* Confirm Password Field */}
            <Input
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm Password"
              register={register}
              type="password"
              htmlFor="confirmPassword"
              rules={{
                required: "Confirm password is required.",
                validate: (value) =>
                  value === password || "Passwords do not match.",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters.",
                },
                maxLength: {
                  value: 20,
                  message: "Password must be no more than 20 characters.",
                },
                // pattern: {
                //   value:
                //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                //   message:
                //     "Password must include uppercase, lowercase, number, and special character.",
                // },
              }}
              errors={errors}
            />
            <Button type="submit" className="bg-green-200">
              Set New Password
            </Button>
          </form>

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
    </section>
  );
}
