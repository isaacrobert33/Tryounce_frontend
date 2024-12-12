import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../constants/routes.constants";

export default function useNavigation() {
  const navigate = useNavigate();

  function navigateToHome() {
    navigate(APP_ROUTES.Home);
  }
  function navigateToVerifyEmail() {
    navigate(APP_ROUTES.EmailVerificationCreateAccount)
  }

  function navigateToCreateAccount() {
    navigate(APP_ROUTES.CreateAccount);
  }

  function navigateToLogin() {
    navigate(APP_ROUTES.Login);
  }
  function navigateToForgotPassword() {
    navigate(APP_ROUTES.ForgotPassword);
  }

  return {
    navigateToHome,
    navigateToCreateAccount,
    navigateToLogin,
    navigateToForgotPassword,
    navigateToVerifyEmail
  };
}
