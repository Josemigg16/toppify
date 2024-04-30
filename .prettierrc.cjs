const { rules } = require("eslint-config-prettier")

module.exports = {
  ...rules,
  printWidth: 100,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  trailingComma: "none",
  useTabs: true,
  overrides: [
    {
      files: ["*.json", "*.md", "*.toml", "*.yml", "*.vue"],
      options: {
        useTabs: false,
      },
    },
  ],
  endOfLine: "lf",
}
