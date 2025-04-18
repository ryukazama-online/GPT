import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Agar aplikasi bisa diakses dari luar
    port: 5173,
  },
});
