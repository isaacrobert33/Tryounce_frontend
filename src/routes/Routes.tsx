import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { APP_ROUTES } from "../constants/routes.constants";
import SuspenseLayout from "../layouts/SuspenseLayout";
import { UserContextProvider } from "../hooks/UserContext/UserContext";
import { MessageProvider } from "../hooks/Message/MessageContext";
import MessageDisplay from "../components/MessageDisplay/MessageDisplay";

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

export default function RoutesSwitches() {
  const routes = [
    { path: APP_ROUTES.Home, element: <Home /> },
    { path: APP_ROUTES.Onboarding, element: <Onboarding /> },
    { path: APP_ROUTES.CreateAccount, element: <CreateAccount /> },
    { path: APP_ROUTES.Login, element: <Login /> },
    { path: APP_ROUTES.ForgotPassword, element: <ForgotPassword /> },
    { path: APP_ROUTES.EmailVerificationForgotPassword, element: <EmailVerificationPassword /> },
    { path: APP_ROUTES.MessageVerification, element: <MessageVerification /> },
    { path: APP_ROUTES.NewPassword, element: <NewPassword /> },
    { path: APP_ROUTES.PasswordResetSuccessful, element: <PasswordResetSuccessful /> },
    { path: APP_ROUTES.EmailVerificationCreateAccount, element: <EmailVerificationCreateAccount /> },
    { path: APP_ROUTES.FaceVerification, element: <FaceVerification /> },
    { path: APP_ROUTES.FaceVerificationProcess, element: <FaceVerificationProcess /> },
  ];

  return (
    <Router>
      <MessageProvider>
        <MessageDisplay />
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<SuspenseLayout />}>
              {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
              <Route path="*" element={<div>Page Not Found</div>} />
            </Route>
          </Routes>
        </UserContextProvider>
      </MessageProvider>
    </Router>
  );
}
