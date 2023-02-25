<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { loadTranslations, locale, defaultLocale } from "$lib/translation";

  const { pathname } = $page.url;
  const initLocale = locale.get() || defaultLocale; // set default if no locale already set

  onMount(async () => {
    await loadTranslations(initLocale, pathname); // keep this just before the `return`
    document.documentElement.setAttribute("lang", initLocale);
  });
</script>

<slot />
