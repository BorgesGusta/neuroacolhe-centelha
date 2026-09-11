import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  // GitHub Pages serve o site em https://<user>.github.io/nura_centelha/,
  // então os assets precisam ser referenciados com esse subcaminho.
  // Fora do modo "demo" (dev local / build Docker), continua "/".
  base: mode === "demo" ? "/nura_centelha/" : "/",
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    strictPort: false,
    hmr: true,
    watch: {
      usePolling: true,
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
}))
