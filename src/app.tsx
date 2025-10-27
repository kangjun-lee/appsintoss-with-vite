import { TDSMobileAITProvider } from "@toss/tds-mobile-ait";
import { BrowserRouter, Route, Routes } from "react-router";
import { LotteryProvider } from "./hooks/use-lottery-state";
import { HomePage } from "./pages/home-page";
import { SetupPage } from "./pages/setup-page";
import { SpinPage } from "./pages/spin-page";
import { ResultPage } from "./pages/result-page";
import { HistoryPage } from "./pages/history-page";
import { DemoPage } from "./pages/demo-page";

export function App() {
  return (
    <TDSMobileAITProvider>
      <LotteryProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/setup" element={<SetupPage />} />
            <Route path="/spin" element={<SpinPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/demo" element={<DemoPage />} />
          </Routes>
        </BrowserRouter>
      </LotteryProvider>
    </TDSMobileAITProvider>
  );
}
