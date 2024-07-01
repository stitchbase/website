// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxthq/studio",
    "@nuxtjs/tailwindcss",
    "nuxt-disqus",
  ],
  disqus: {
    shortname: "your-disqus-shortname",
  },
});
