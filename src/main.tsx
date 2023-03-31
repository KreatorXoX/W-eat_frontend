import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Hele from "./Hele";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Hele />
    {/* <App /> */}
  </React.StrictMode>
);
