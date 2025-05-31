import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import libcss from 'vite-plugin-libcss';
import { coverageConfigDefaults } from 'vitest/config';

const definedConfig = defineConfig({
  plugins: [react(), libcss()],
  build: {
    lib: {
      entry: 'src/index.tsx',
      name: 'HLUILibrary',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'prop-types', 'react/jsx-runtime'],
    },
  },
  resolve: {
    alias: {
      // Add any path aliases here if needed
    },
  },
  test: {
    coverage: {
      enabled: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: [
        ...coverageConfigDefaults.exclude,
        '**/.storybook/**',
        '**/storybook-static/**',
        '**/*.stories.tsx',
        'src/stories/Docs/**',
        'src/index.tsx',
      ],
    },
  },
});

export default definedConfig;
