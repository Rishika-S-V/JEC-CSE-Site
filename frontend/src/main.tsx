import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import viteLogo from "./assets/vite.svg";

const favElement: HTMLLinkElement = document.getElementById(
  "fav-icon"
) as HTMLLinkElement;
favElement.href = viteLogo;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
