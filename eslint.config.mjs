import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    rules: {
      "no-unused-vars": "error",
      quotes: ["error", "double"],
      semi: ["error", "always"],
      eqeqeq: "error",
    },
  },
];
