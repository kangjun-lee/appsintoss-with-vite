import { defineConfig } from "@apps-in-toss/web-framework/config";

export default defineConfig({
  appName: "pickly",
  brand: {
    displayName: "픽클리",
    primaryColor: "#18a5a5",
    // public/icon.png 로 저장 후, web.host, port 와 동일한 값 사용
    icon: "http://100.65.50.87:5173/logo.png",
    bridgeColorMode: "basic",
  },
  web: {
    host: "100.65.50.87",
    port: 5173,
    commands: {
      dev: "vite --host",
      build: "tsc -b && vite build",
    },
  },
  permissions: [],
  outdir: "dist",
});
