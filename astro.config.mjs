import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://rickyxyz.dev",
  integrations: [mdx(), sitemap(), partytown({
    config: {
      debug: false,
      forward: ['dataLayer.push', 'gtag']
    }
  }), preact(),
  sitemap({
    filter: (page) => page !== 'https://rickyxyz.dev/frontendmentor-projects/',
    entryLimit: 1000,
    changefreq: 'weekly',
  })]
});
