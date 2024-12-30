import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import onlyWarn from "eslint-plugin-only-warn";
import pluginImport from "eslint-plugin-import";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import pluginStorybook from "eslint-plugin-storybook";

/**
 * @type {import("eslint").Linter.FlatConfig[]}
 */
const config = [
  // Base recommended configurations
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginImport.flatConfigs.recommended,

  // Additional customizations
  {
    plugins: {
      onlyWarn,
      pluginStorybook,
      "react-hooks": pluginReactHooks,
    },
    settings: {
      react: { version: "detect" }, // Automatically detect React version

      "import/resolver": {
        node: {
          extensions: [".ts", ".tsx"],
        },
        alias: {
          map: [["@", "./src"]], // Map @/ to ./src
          extensions: [".ts", ".tsx"],
        },
      },
    },
    rules: {
      // React hooks rules
      ...pluginReactHooks.configs.recommended.rules,

      // Import rules
      "import/order": [
        "warn",
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

      // Sort imports
      "sort-imports": [
        "error",
        {
          allowSeparatedGroups: true,
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],

      // Disable React-in-JSX-scope rule for new JSX transform
      "react/react-in-jsx-scope": "off",
    },
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
    },
  },

  // Ignore certain files and directories
  {
    ignores: ["dist/**", "**.config.js", "manager.js", "preview.js"],
  },
];

export default config;
