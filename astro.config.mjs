import react from "@astrojs/react";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    expressiveCode({
      plugins: [pluginLineNumbers()],
    }),
    mdx(),
  ],

  output: "static",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
