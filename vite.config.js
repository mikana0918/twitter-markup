import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import legacy from "@vitejs/plugin-legacy";
import vue2 from "@vitejs/plugin-vue2";
import { apiUrl } from "./src/env";

// https://vitejs.dev/config/
export default ({ mode }) => {
  // eslint-disable-next-line no-undef
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      vue2(),
      legacy({
        targets: ["ie >= 11"],
        additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      proxy: {
        "/api": {
          target: apiUrl,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  });
};
