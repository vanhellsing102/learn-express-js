import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], languageOptions: { globals: {
    ...globals.browser,
    ...globals.node
  } } },
  {rules: {
    "no-unused-vars": "error",
    "no-unused-expressions": "error",
    "prefer-const": 'error',
    "no-console": "warn",
    "no-undef": "error",
  }},
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended
]);
