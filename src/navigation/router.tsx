import { createBrowserRouter } from "react-router-dom";
import Booking from "src/pages/Booking";
import Dashboard from "src/pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
]);

export default router;
