import { APP_ROUTES } from "../constants/routes.constants";
import SuspenseLayout from "../layouts/SuspenseLayout";
import {
  CreateAccount,
  EmailVerificationCreateAccount,
  EmailVerificationPassword,
  FaceVerification,
  FaceVerificationProcess,
  ForgotPassword,
  Home,
  Login,
  MessageVerification,
  NewPassword,
  Onboarding,
  PasswordResetSuccessful,
} from "../pages/index";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MessageProvider } from "../hooks/Message/MessageContext";
import MessageDisplay from "../components/MessageDisplay/MessageDisplay";

export default function RoutesSwitches() {
  return (
    <Router>
      <MessageProvider>
          <MessageDisplay/>
        <Routes>
          <Route path="/" element={<SuspenseLayout />}>
            <Route path={APP_ROUTES.Home} element={<Home />} />
            <Route path={APP_ROUTES.Onboarding} element={<Onboarding />} />
            <Route path={APP_ROUTES.CreateAccount} element={<CreateAccount />} />
            <Route path={APP_ROUTES.Login} element={<Login />} />
            <Route
              path={APP_ROUTES.ForgotPassword}
              element={<ForgotPassword />}
            />
            <Route
              path={APP_ROUTES.EmailVerificationForgotPassword}
              element={<EmailVerificationPassword />}
            />
            <Route
              path={APP_ROUTES.MessageVerification}
              element={<MessageVerification />}
            />
            <Route path={APP_ROUTES.NewPassword} element={<NewPassword />} />
            <Route
              path={APP_ROUTES.PasswordResetSuccessful}
              element={<PasswordResetSuccessful />}
            />
            <Route
              path={APP_ROUTES.EmailVerificationCreateAccount}
              element={<EmailVerificationCreateAccount />}
            />
            <Route
              path={APP_ROUTES.FaceVerification}
              element={<FaceVerification />}
            />
            <Route
              path={APP_ROUTES.FaceVerificationProcess}
              element={<FaceVerificationProcess />}
            />
          </Route>
        </Routes>
      </MessageProvider>
    </Router>
  );
}
