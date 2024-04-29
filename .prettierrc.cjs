const { rules } = require("eslint-config-prettier")

module.exports = {
  ...rules,
  semi: false,
  overrides: [
    {
      files: "*.vue",
    },
  ],
}
