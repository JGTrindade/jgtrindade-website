// import { i18n } from "@lingui/core";

// async function loadTranslations(locale) {
//   const { messages } = await import(`../locales/${locale}/messages.js`);
//   i18n.load(locale, messages);
//   i18n.activate(locale);
// }

// export { i18n, loadTranslations };

import { i18n } from "@lingui/core";
import { messages as arMessages } from "./locales/ar/messages";
import { messages as enMessages } from "./locales/en/messages";
import { messages as esMessages } from "./locales/es/messages";
import { messages as frMessages } from "./locales/fr/messages";
import { messages as ptBrMessages } from "./locales/pt-br/messages";
import { messages as ruMessages } from "./locales/ru/messages";
import { messages as zhCnMessages } from "./locales/zh-cn/messages";

const translations = {
  ar: arMessages,
  en: enMessages,
  es: esMessages,
  fr: frMessages,
  "pt-br": ptBrMessages,
  ru: ruMessages,
  "zh-cn": zhCnMessages
};

// Function to change language dynamically
function setLanguage(locale: string) {
  if (!translations[locale]) {
    console.warn(`Locale "${locale}" not found, falling back to English.`);
    locale = "en";
  }

  i18n.load(locale, translations[locale]);
  i18n.activate(locale); // Set active language
}

// Initialize with default language
setLanguage("en");

export { i18n, setLanguage };
