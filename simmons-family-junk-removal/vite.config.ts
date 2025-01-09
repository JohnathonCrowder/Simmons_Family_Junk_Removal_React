import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // This alias allows you to use ~/images in your import statements
      '~/images': path.resolve(__dirname, './public/images'),
    },
  },
  
  server: {
    open: true, // Automatically open the app in the browser on server start
    port: 3000, // Specify the port number
  },
  
  build: {
    sourcemap: true, // Enable source maps for better debugging
    outDir: 'dist', // Specify the output directory (default is dist)
  },
  
  // Logging
  logLevel: 'info',
  
  // Custom logger
  customLogger: {
    info(msg) {
      console.log(msg)
    },
    warn(msg) {
      console.warn(msg)
    },
    error(msg) {
      console.error(msg)
    },
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'], // Force these dependencies to be pre-bundled
  },
})