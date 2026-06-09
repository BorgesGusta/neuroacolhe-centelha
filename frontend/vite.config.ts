import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: false,
    hmr: true,
    watch: {
      ignored: [
        '**/node_modules/**',
        '**/node_modules.nosync/**',
        '**/.git/**',
      ],
    },
  },
  optimizeDeps: {
    // Pre-bundle these to avoid slow dep-scan at startup
    include: [
      'react',
      'react-dom',
      'react-dom/client',
      'react-router-dom',
      'react-hook-form',
      'axios',
      'lucide-react',
      'react-toastify',
    ],
    // Exclude large packages that don't need bundling
    exclude: ['react-google-recaptcha-v3'],
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['lucide-react', 'react-toastify'],
        },
      },
    },
  },
})
