module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:promise/recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
  ],
  overrides: [
    {
      files: ["vite.config.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.node.json",
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      alias: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        map: [["@/*", "src/*"]],
      },
      typescript: true,
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "import/order": [
      "error",
      {
        groups: [["external", "builtin"], "internal", ["sibling", "parent"], "index", "type"],
        pathGroups: [
          {
            pattern: "@/types",
            group: "type",
          },
          {
            pattern: "@/**",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["internal"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
  },
};
