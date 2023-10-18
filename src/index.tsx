import React from "react";
import ReactDOM from "react-dom/client";
import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";

import "./index.css";
import App from "./App";

const instance = createInstance({
  urlBase: "https://motivumbervercelapp.matomo.cloud/",
  siteId: 1,
  srcUrl: "//cdn.matomo.cloud/motivumbervercelapp.matomo.cloud/matomo.js",
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
