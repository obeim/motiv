import { createBrowserRouter } from "react-router-dom";
import Booking from "src/pages/Booking";
import Dashboard from "src/pages/Dashboard";
import DashboardLayout from "src/layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    ),
  },
  {
    path: "/booking",
    element: (
      <DashboardLayout>
        <Booking />
      </DashboardLayout>
    ),
  },
]);

export default router;
