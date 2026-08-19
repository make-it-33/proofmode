import { Navigate, Route, Routes } from "react-router";
import { AgeRoute } from "../routes/AgeRoute";
import { MissionRoute } from "../routes/MissionRoute";
import { PromiseRoute } from "../routes/PromiseRoute";
import { WebsiteRoute } from "../routes/WebsiteRoute";
import { RunProvider } from "./RunProvider";

export function App() {
  return (
    <RunProvider>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Routes>
        <Route index element={<WebsiteRoute />} />
        <Route path="play" element={<PromiseRoute />} />
        <Route path="entry" element={<AgeRoute />} />
        <Route path="mission/northstar-sales-drop" element={<MissionRoute />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </RunProvider>
  );
}
