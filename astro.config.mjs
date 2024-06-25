import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://rickyxyz.github.io",
  integrations: [mdx(), sitemap(), partytown({
    config: {
      debug: false,
      forward: ['dataLayer.push', 'gtag']
    }
  }), preact()]
});