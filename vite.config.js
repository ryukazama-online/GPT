export default defineConfig({
    plugins: [react()],
    server: {
      host: '0.0.0.0',  // Ini agar aplikasi bisa diakses dari semua alamat
      port: 5173,        // Port default
    },
  });
  