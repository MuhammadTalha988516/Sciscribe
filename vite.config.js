import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',                // ✅ ✅ ✅ ADD THIS LINE!
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: true,
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
