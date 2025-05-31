import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import _import from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import unusedImports from 'eslint-plugin-unused-imports';
import noBarrelImports from './eslint-rules/no-barrel-imports.js';

export default [
  // Ignore patterns (do NOT ignore .mdx if you want to lint them)
  {
    ignores: [
      '**/node_modules/**/*',
      '**/build/**/*',
      '**/dist/**/*',
      '**/coverage/**/*',
      '**/public/**/*',
      '**/.pnp.cjs',
      '**/.yarn/**/*',
      '**/.idea',
      '**/.vscode',
      '**/*.json',
      '**/*.config.json',
      '**/*.mjs',
      // '**/*.md', // Optionally ignore markdown, but not mdx
    ],
  },
  // Base JS/TS/React config
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      '@typescript-eslint': typescriptEslint,
      prettier,
      import: _import,
      'unused-imports': unusedImports,
      local: {
        rules: {
          'no-barrel-imports': noBarrelImports,
        },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'prettier/prettier': 'warn',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'import/order': [
        'warn',
        {
          groups: [
            ['builtin', 'external'],
            ['internal', 'parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-duplicates': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'import/no-commonjs': 'error',
      // 💥 NEW: Block barrel imports via custom rule
      'local/no-barrel-imports': 'error',
    },
  },
];
