const { configure, presets } = require('eslint-kit')

module.exports = configure({
  presets: [
    presets.imports(),
    presets.node(),
    presets.typescript(),
    presets.prettier({
      semi: false,
      useTabs: false,
      printWidth: 80,
      singleQuote: true,
      trailingComma: 'all',
      jsxSingleQuote: true,
      arrowParens: 'avoid',
    }),
  ],
  extend: {
    extends: ['plugin:astro/recommended'],
    overrides: [
      {
        files: ['*.astro'],
        parser: 'astro-eslint-parser',
        parserOptions: {
          parser: '@typescript-eslint/parser',
          extraFileExtensions: ['.astro'],
        },
      },
    ],
  },
})
