export default defineNuxtConfig({
  pagesRoutePrefix: {
    prefix: "/admin/:lang",
  },

  experimental: {
    typedPages: true,
  },
});
