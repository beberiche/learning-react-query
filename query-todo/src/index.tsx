import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { worker } from "./mocks/worker";

worker.start();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
