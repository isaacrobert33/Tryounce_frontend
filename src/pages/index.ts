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
export const MessageVerification = lazy(
  () => import("./MessageVerification/MessageVerification")
);
export const NewPassword = lazy(() => import("./NewPassword/NewPassword"));
export const PasswordResetSuccessful = lazy(
  () => import("./PasswordResetSuccessful/PasswordResetSuccessful")
);
export const EmailVerificationCreateAccount = lazy(
  () =>
    import("./EmailVerificationCreateAccount/EmailVerificationCreateAccount")
);
export const FaceVerification = lazy(
  () => import("./FaceVerification/FaceVerification")
);
export const FaceVerificationProcess = lazy(
  () => import("./FaceVerification/FaceVerificationProcess")
);
