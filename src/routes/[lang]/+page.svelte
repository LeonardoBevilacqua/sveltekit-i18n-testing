<script>
    import { t } from "$lib/translation";
</script>

<h1>{$t("common.helloWorld")}</h1>

<h2>{$t("common.welcome")}</h2>
<p>{@html $t("common.text", { link: "https://kit.svelte.dev" })}</p>
