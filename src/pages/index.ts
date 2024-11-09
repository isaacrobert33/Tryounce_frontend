import { lazy } from "react";

export const Home = lazy(() => import("./Home/Home"));
export const Onboarding = lazy(() => import("./Onboarding/Onboarding"));
export const CreateAccount = lazy(
  () => import("./CreateAccount/CreateAccount")
);
export const Login = lazy(() => import("./Login/Login"));
export const ForgotPassword = lazy(
  () => import("./ForgotPassword/ForgotPassword")
);
export const EmailVerificationPassword = lazy(
  () => import("./EmailVerificationForgotPassword/EmailVerificationPassword")
);
