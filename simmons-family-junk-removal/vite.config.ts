import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({ // Optional: helps visualize bundle size
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  ],
  server: {
    port: 3000,
    open: true, // Automatically open the app in the browser
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
    emptyOutDir: true,
    target: 'esnext', // Modern browsers for better performance
    modulePreload: {
      polyfill: true,
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'animations': ['framer-motion'],
          'routing': ['react-router-dom'],
        }
      }
    },
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'public': path.resolve(__dirname, './public'),
      'images': path.resolve(__dirname, './public/images')
    }
  },
  publicDir: 'public',
  base: '/',
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-router-dom'],
    exclude: ['react-dnd', 'react-dnd-html5-backend'], // Example of excluding heavy libraries if you don't use them immediately
  },
  preview: {
    port: 8080,
    strictPort: true,
  }
})