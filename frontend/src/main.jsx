import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "react-toastify/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { LoginContextProvider } from "./context/LoginContextProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LoginContextProvider>
  </StrictMode>
);
