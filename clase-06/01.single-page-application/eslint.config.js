import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
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
