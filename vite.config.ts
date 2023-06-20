import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components',
      hooks: '/src/hooks',
      pages: '/src/pages',
      services: '/src/services',
      types: '/src/types',
    },
  },
});
