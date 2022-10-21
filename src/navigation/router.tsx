import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import DashboardLayout from "src/layouts/DashboardLayout";
const Dashboard = lazy(() => import("src/pages/Dashboard"));
const Booking = lazy(() => import("src/pages/Booking"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DashboardLayout>
        <Suspense>
          <Dashboard />
        </Suspense>
      </DashboardLayout>
    ),
  },
  {
    path: "/booking",
    element: (
      <DashboardLayout>
        <Suspense>
          <Booking />
        </Suspense>
      </DashboardLayout>
    ),
  },
]);

export default router;
