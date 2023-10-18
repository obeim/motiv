import { RouterProvider } from "react-router-dom";
import router from "./navigation/router";
import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
