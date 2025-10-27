import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy /api to your backend server during development
      '/api': {
        target: 'http://localhost:8000',  // Your Express backend URL
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api'),  // Optional, keeps /api
      },
    },
  },
});
