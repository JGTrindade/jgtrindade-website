// src/astro-extractor.ts
import { extractor as defaultExtractor } from "@lingui/cli/api";
import { transform } from "@astrojs/compiler";

export const extractor = {
  // Match .astro files
  match(filename) {
    return filename.endsWith(".astro");
  },

  // Extract translatable strings from .astro files
  async extract(filename, code, onMessageExtracted, ctx) {
    // Transform the .astro file into JavaScript
    const { code: transformedCode } = await transform(code, {
      sourcefile: filename,
    });

    // Use the default extractor to process the transformed JavaScript
    return defaultExtractor.extract(
      filename,
      transformedCode,
      onMessageExtracted,
      ctx
    );
  },
};
