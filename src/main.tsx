import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BackingContextProvider } from "./context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BackingContextProvider>
      <App />
    </BackingContextProvider>
  </React.StrictMode>
);
