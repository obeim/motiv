import { createBrowserRouter } from "react-router-dom";
import Dashboard from "src/pages/Dashboard";
import Booking from "src/pages/Booking";

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
