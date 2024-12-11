module.exports = {
  extends: [
    'artisan',
  ],
  rules: {
  },
  overrides: [
    {
      files: [
        './.github/**/*.yml',
      ],
      rules: {
        'yml/no-empty-mapping-value': 'off',
      },
    },
  ],
}
