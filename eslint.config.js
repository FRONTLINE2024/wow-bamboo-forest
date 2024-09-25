import js from "eslint-config-ham-javascript";
import prettier from "eslint-plugin-prettier";

/**
 * @type {import("eslint").Linter.Config}
 */

export default [
  ...js,
  {
    plugins: { prettier },
    rules: {
      "prettier/prettier": ["error"],
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
    },
  },
];
