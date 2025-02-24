import { i18n } from "@lingui/core";

async function loadTranslations(locale) {
  const { messages } = await import(`../locales/${locale}/messages.js`);
  i18n.load(locale, messages);
  i18n.activate(locale);
}

export { i18n, loadTranslations };