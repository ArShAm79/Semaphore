module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    semi: ['error', 'never'],
    'import/extensions': ['error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      }],
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-named-as-default': 0,
    'linebreak-style': 0,
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },

}
