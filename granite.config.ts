import { defineConfig } from "@apps-in-toss/web-framework/config";

export default defineConfig({
  appName: "demo-app",
  brand: {
    displayName: "테스트 앱",
    primaryColor: "#3182f6",
    // public/icon.png 로 저장 후, web.host, port 와 동일한 값 사용
    icon: "http://localhost:5173/logo.png",
    bridgeColorMode: "basic",
  },
  web: {
    host: "localhost",
    port: 5173,
    commands: {
      dev: "vite --host",
      build: "tsc -b && vite build",
    },
  },
  permissions: [],
  outdir: "dist",
});
