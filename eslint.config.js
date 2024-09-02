// eslint.config.mjs
import antfu from "@antfu/eslint-config";

export default antfu({
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },

  // TypeScript and Vue are autoetected, you can also explicitly enable them:
  typescript: true,
  vue: true,

  formatters: true,
});
