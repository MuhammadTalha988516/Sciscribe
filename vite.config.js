import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    target: 'esnext',
    minify: 'esbuild',           // ✅ Fastest JS/CSS minifier
    cssCodeSplit: true,          // ✅ Split CSS for better cache
    outDir: 'dist',
    sourcemap: false,            // ✅ Remove sourcemaps for production
    rollupOptions: {
      output: {
        manualChunks: undefined, // ✅ Let Vite auto-split vendor chunks
      },
    },
  },
  server: {
    // Useful if testing locally with compression proxy
    port: 5173,
    open: true,
  },
});
