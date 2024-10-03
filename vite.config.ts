import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
