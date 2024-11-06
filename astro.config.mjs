import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://rickyxyz.dev",
  integrations: [
    mdx(),
    partytown({
      config: {
        debug: false,
        forward: ["dataLayer.push", "gtag"],
      },
    }),
    preact(),
  ],
});
