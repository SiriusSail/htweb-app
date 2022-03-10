const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.eslint,
  parser: '@typescript-eslint/parser',
  plugins: [...fabric.eslint.plugins, '@typescript-eslint'],
  extends: [
    ...fabric.eslint.extends,
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:prettier/recommended',
  ],
  rules: {
    ...fabric.eslint.rules,
    quotes: [1, 'double'],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'react/jsx-wrap-multilines': 1,
    'react/jsx-equals-spacing': 2,
    'import/no-anonymous-default-export': 'off',
  },
};
