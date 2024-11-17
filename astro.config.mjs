import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    expressiveCode({
      plugins: [pluginLineNumbers()],
    }),
    mdx(),
  ],

  output: "hybrid",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
