module.exports = {
  root: true,
  extends: '@react-native-community',
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', 'react-native'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    'no-console': ['error', {allow: ['dev', 'log']}],
    'no-unused-vars': 'off',
    'react/prop-types': [0],
    indent: 'off', // keep ident off due to incompatibility with prettier, prettier will do it's job doing that
    'no-cond-assign': 'off',
    'prettier/prettier': 'error',
    'no-useless-catch': 'off',
    'no-async-promise-executor': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'babel-plugin-root-import': {rootPathSuffix: 'src'},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
