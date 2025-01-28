import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import LoginProvider from "./Hook/ContextHook.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </StrictMode>
);
