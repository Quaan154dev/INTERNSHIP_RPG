import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SoundProvider } from "./SoundCotext.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SoundProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SoundProvider>
  </React.StrictMode>
);
