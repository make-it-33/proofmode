import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App } from "./app/App";
import "./arena.css";
import "./lock-choice.css";

const root = document.getElementById("root");
if (!root) throw new Error("ProofMode root element is missing.");

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
