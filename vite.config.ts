import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
    },
  },
  esbuild: {
    jsx: "transform",
    jsxDev: false,
    jsxInject: `import { jsx } from '@/jsx-runtime'`,
    jsxFactory: "jsx.render",
  },
});
