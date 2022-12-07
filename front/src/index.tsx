import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const node = document.getElementById("root") as HTMLElement;
const root = createRoot(node);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
