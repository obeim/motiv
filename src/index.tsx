import React from "react";
import ReactDOM from "react-dom/client";
import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";

import "./index.css";
import App from "./App";

const instance = createInstance({
  urlBase: "https://versestgtamrun1.matomo.cloud/",
  siteId: 3,
  srcUrl: "//cdn.matomo.cloud/versestgtamrun1.matomo.cloud/matomo.js",
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // @ts-ignore
  <MatomoProvider value={instance}>
    <App />
  </MatomoProvider>
);
