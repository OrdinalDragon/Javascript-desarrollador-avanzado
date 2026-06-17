import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';
export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        document: 'readonly',
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettier.rules,
      // calidad
      'no-unused-vars': 'warn',
      eqeqeq: 'error',
      // buenas prácticas
      'prefer-const': 'error',
      'no-var': 'error',
      // prettier como fuente única de formato
      'prettier/prettier': 'error',
    },
  },
];
