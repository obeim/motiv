import { RouterProvider } from "react-router-dom";
import router from "./navigation/router";
import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";

const App = () => {
  const instance = createInstance({
    urlBase: "https://versestgtamrun1.matomo.cloud/",
    siteId: 3,
    srcUrl: "//cdn.matomo.cloud/versestgtamrun1.matomo.cloud/matomo.js",
  });

  return <RouterProvider router={router} />;
};

export default App;
