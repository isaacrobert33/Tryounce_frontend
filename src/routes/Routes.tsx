import { APP_ROUTES } from "../constants/routes.constants";
import SuspenseLayout from "../layouts/SuspenseLayout";
import {
  CreateAccount,
  EmailVerificationPassword,
  ForgotPassword,
  Home,
  Login,
  Onboarding,
} from "../pages/index";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function RoutesSwitches() {
  return (
    <Router>
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
        </Route>
      </Routes>
    </Router>
  );
}
