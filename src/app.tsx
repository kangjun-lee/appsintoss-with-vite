import { TDSMobileAITProvider } from "@toss/tds-mobile-ait";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/home-page";

export function App() {
  return (
    <TDSMobileAITProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </TDSMobileAITProvider>
  );
}
