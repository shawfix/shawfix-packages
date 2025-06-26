import path from 'node:path';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';

const rootDir = path.resolve(__dirname, '.');

// https://vite.dev/config/
export default defineConfig({
  root: rootDir,
  optimizeDeps: {
    exclude: ['js-big-decimal'],
  },
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      '@': `${rootDir}/src`,
    },
  },
});
