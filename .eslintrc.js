module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'standard',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    semi: 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    camelcase: 'off',
  },
};
