import { defineConfig } from "astro/config";


export default defineConfig({
  i18n: {
    locales: ["ar", "en", "es", "fr", "pt-br", "ru", "zh-cn"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
