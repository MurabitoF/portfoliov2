import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import paraglide from "@inlang/paraglide-js-adapter-astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), paraglide({
    project: "./project.inlang",
    outdir: "./src/paraglide"
  })],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});