import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
   server: {
    host: true, // 👈 important!
    port: 5173, // default Vite port, or change if needed
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

});
