const path = require("path");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
  ],
  root: true,
  ignorePatterns: [
    "**/.eslintrc.js",
    "**/prettier.config.js",
    "**/tailwind.config.js",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: path.join(__dirname, "tsconfig.json"),
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: path.join(__dirname, "tsconfig.json"),
  },
  plugins: ["@typescript-eslint", "import"],
  rules: {
    curly: ["error", "all"],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        format: ["PascalCase"],
        selector: "typeLike",
      },
      {
        custom: {
          match: false,
          regex: "^I[A-Z]",
        },
        format: ["PascalCase"],
        selector: "interface",
      },
    ],
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        ignoreTypeReferences: true,
      },
    ],
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/quotes": ["error", "double"],
    "import/extensions": [
      "error",
      "never",
      {
        css: "always",
        json: "always",
        mjs: "always",
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
    "import/order": [
      1,
      {
        groups: [
          "external",
          "builtin",
          "internal",
          "sibling",
          "parent",
          "index",
        ],
        "newlines-between": "always",
      },
    ],
    "import/prefer-default-export": "off",
    "no-console": [
      "warn",
      {
        allow: ["error"],
      },
    ],
    "no-param-reassign": "off",
    "no-restricted-exports": "off",
    "no-shadow": "off",
    "no-undef": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "sort-imports": [
      "error",
      {
        allowSeparatedGroups: true,
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
  },
  settings: {
    "import/internal-regex": "^@/",
  },
};
