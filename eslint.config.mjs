import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'build',
      'dist',
      'coverage',
      'out',
      'playwright-report',
      'test-results',
      'node_modules',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  prettier,
);
