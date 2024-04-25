import { defineConfig } from 'astro/config';
import unocss from 'unocss/astro';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [unocss({
    injectReset: true
  }), mdx()]
});