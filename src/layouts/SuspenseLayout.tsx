import Loader from "../components/Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function SuspenseLayout() {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
}
