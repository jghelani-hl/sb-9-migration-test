import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import libcss from 'vite-plugin-libcss';

const definedConfig = defineConfig({
  plugins: [react(), libcss()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'sb-9-migration',
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
  optimizeDeps: {
    include: ['@vueless/storybook-dark-mode', 'storybook/theming'],
  },
});

export default definedConfig;
