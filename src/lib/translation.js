import i18n from "sveltekit-i18n";

/** @type {import('sveltekit-i18n').Config} */
const config = {
  loaders: [
    {
      locale: "en",
      key: "common",
      loader: async () => (await import("./en/common.json")).default,
    },
    {
      locale: "pt",
      key: "common",
      loader: async () => (await import("./pt/common.json")).default,
    },
  ],
};

export const defaultLocale = "en";

export const { t, locale, locales, loading, loadTranslations } = new i18n(
  config
);
