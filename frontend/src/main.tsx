import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import JecLogo from "./assets/imgs/jec-logo.svg";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

const favElement: HTMLLinkElement = document.getElementById(
  "fav-icon"
) as HTMLLinkElement;
favElement.href = JecLogo;

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
