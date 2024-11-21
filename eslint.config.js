import { defineConfig } from 'eslint-define-config';
import importPlugin from 'eslint-plugin-import';

export default defineConfig({
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'airbnb-base', 
  ],
  parserOptions: {
    ecmaVersion: 'latest', 
    sourceType: 'module',  
  },
  globals: {
    ...globals.node,
    ...globals.jest, 
  },
  plugins: {
    import: importPlugin, 
  },
  rules: {
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__filename', '__dirname'],
      },
    ],
    'import/extensions': [
      'error',
      {
        js: 'always', 
      },
    ],
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'no-console': 'off', 
    'import/no-extraneous-dependencies': 'off', 
  },
});
