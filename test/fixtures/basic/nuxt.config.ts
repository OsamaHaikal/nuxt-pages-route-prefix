import MyModule from "../../../src/module";

export default defineNuxtConfig({
  modules: [
    MyModule,
  ],

  pagesRoutePrefix: {
    prefix: "/admin",
  },
});
