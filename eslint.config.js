import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt({
  files: ['**/*.ts', '**/*.tsx'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'semi': ["error", "never"],
  },
})
