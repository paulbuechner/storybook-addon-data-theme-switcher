/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-packagejson"],
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  arrowParens: "always",
  useTabs: false,
  printWidth: 80,
  endOfLine: "lf",
};

export default config;
