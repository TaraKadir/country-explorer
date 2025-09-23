import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CountryProvider } from "./context/CountryContext.jsx";
import App from "./App.jsx";
import "./styles/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CountryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CountryProvider>
  </React.StrictMode>
);
