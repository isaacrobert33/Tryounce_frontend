import { useForm } from "react-hook-form";
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

import { AppleIcon, GoogleIcon } from "../../assets/svgs/index";
import useAppNavigation from "../../hooks/navigation/useAppNavigation";

interface FormValues {
  email: string;
  password: string;
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  function onSubmit(data: FormValues): void {
    console.log("Logins Submitted:", data);
  }

  const { navigateToCreateAccount, navigateToForgotPassword } =
    useAppNavigation();

  return (
    <section className="container relative py-10">
      <Logo />

      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-center items-start py-10 px-2 setting">
          <Heading title="Login" />
          <GeneralText>Provide details to login to your account</GeneralText>

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
                // pattern: {
                //   value:
                //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                //   message:
                //     "Password must include uppercase, lowercase, number, and special character.",
                // },
              }}
              errors={errors}
            />

            <div className="flex items-center justify-between">
              <Input
                name="isLoggedin"
                label="Keep me Logged In"
                htmlFor="individual"
                register={register}
                type="checkbox"
                errors={errors}
                className="login-checkbox"
                // onChange={() => handleCheckboxChange("isIndividual")}
              />
              <GeneralText
                onclick={() => navigateToForgotPassword()}
                className="cursor-pointer"
              >
                Forgot Password?
              </GeneralText>
            </div>

            <Button type="submit" className="bg-green-200">
              Login
            </Button>

            <Divider />

            <div className="flex flex-col gap-6">
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

            <BtnText
              className="self-center"
              text1="Don’t have an account?"
              text2="Create one"
              onClick={() => navigateToCreateAccount()}
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
