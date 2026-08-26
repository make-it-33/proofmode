import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App } from "./app/App";
import "./arena.css";
import "./lock-choice.css";
import "./light-surface-contrast.css";
import "./website.css";
import "./today.css";
import "./onboarding.css";

const root = document.getElementById("root");
if (!root) throw new Error("ProofMode root element is missing.");

const routerBase =
  import.meta.env.BASE_URL === "/"
    ? undefined
    : import.meta.env.BASE_URL.replace(/\/$/u, "");

createRoot(root).render(
  <StrictMode>
    <BrowserRouter basename={routerBase}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
