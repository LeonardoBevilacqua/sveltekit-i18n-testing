<script>
  import { t, locale, locales } from "$lib/translation";

  let selectedLanguage;

  const languageOnChange = async () => {
    locale.set(selectedLanguage);
    document.documentElement.setAttribute("lang", selectedLanguage);
  };
</script>

<h1>{$t("common.helloWorld")}</h1>

<h2>{$t("common.welcome")}</h2>
<p>{@html $t("common.text", { link: "https://kit.svelte.dev" })}</p>
<select
  name="language"
  id="language"
  bind:value={selectedLanguage}
  on:change={languageOnChange}
>
  {#each locales.get() as availableLocale, index}
    <option value={availableLocale} selected={availableLocale === locale.get()}>{availableLocale}</option>
  {/each}
</select>

