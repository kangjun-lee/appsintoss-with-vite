import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app";

const isAppsInnTossEnabled = navigator.userAgent.includes("TossApp");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {isAppsInnTossEnabled ? (
      <App />
    ) : (
      <div className="font-semibold text-2xl p-4 w-full h-full flex justify-center items-center">
        <div className="rounded-lg bg-neutral-100 p-6 text-center">
          Toss 앱에서 접속해주세요.
        </div>
      </div>
    )}
  </StrictMode>,
);
