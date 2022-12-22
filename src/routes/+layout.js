import { locale, loadTranslations } from "$lib/translation";

export const prerender = true

export const load = async ({ url }) => {
    const { pathname } = url;
    const lang = `${pathname.match(/\w+?(?=\/|$)/) || ''}`;
    const defaultLocale = lang; // get from cookie, user session, user agent
    const initLocale = locale.get() || defaultLocale; // set default if no locale already set
    await loadTranslations(initLocale, pathname); // keep this just before the `return`

    return {}
}