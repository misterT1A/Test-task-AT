import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@/Assets', replacement: '/src/Assets' },
      { find: '@/Components', replacement: '/src/Components' },
      { find: '@/', replacement: '/src' },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/styles/_vars.scss";
        @import "./src/styles/_mixins.scss";
        @import "./src/styles/_globals.scss";
        `,
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
});
