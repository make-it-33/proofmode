import { Navigate, Route, Routes } from "react-router";
import { AgeRoute } from "../routes/AgeRoute";
import { MissionRoute } from "../routes/MissionRoute";
import { OnboardingRoute } from "../routes/OnboardingRoute";
import {
  AboutRoute,
  DownloadRoute,
  GuideRoute,
  PremiumRoute,
  SupportRoute,
} from "../routes/PublicPages";
import { PromiseRoute } from "../routes/PromiseRoute";
import { TodayRoute } from "../routes/TodayRoute";
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
        <Route path="about" element={<AboutRoute />} />
        <Route path="guide" element={<GuideRoute />} />
        <Route path="premium" element={<PremiumRoute />} />
        <Route path="support" element={<SupportRoute />} />
        <Route path="download" element={<DownloadRoute />} />
        <Route path="app" element={<TodayRoute />} />
        <Route path="app/today" element={<Navigate to="/app" replace />} />
        <Route path="app/onboarding" element={<OnboardingRoute />} />
        <Route
          path="app/setup"
          element={<Navigate to="/app/onboarding" replace />}
        />
        <Route path="play" element={<PromiseRoute />} />
        <Route path="entry" element={<AgeRoute />} />
        <Route path="mission/northstar-sales-drop" element={<MissionRoute />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </RunProvider>
  );
}
