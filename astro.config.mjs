import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://danilppzz.dev",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "de"]
  },
  pages: [{
    src: '/:lang/*',
    data: async ({
      params
    }) => {
      const lang = params.lang || 'en';
      return {
        lang
      };
    }
  }],
  integrations: [tailwind()]
});