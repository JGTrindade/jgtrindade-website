import { defineConfig } from "@lingui/cli";
import { extractor as astroExtractor } from "./astro.custom.extractor";

export default defineConfig({
  sourceLocale: "en",
  locales: ["ar", "en", "es", "fr", "pt-br", "ru", "zh-cn"],
  catalogs: [
    {
      path: "<rootDir>/src/i18n/locales/{locale}/messages",
      include: ["src"],
    },
  ],
  extractors: [astroExtractor]
});
