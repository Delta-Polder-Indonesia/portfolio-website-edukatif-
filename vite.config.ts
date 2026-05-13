/**
 * ============================================
 * 📁 vite.config.ts
 * ============================================
 * 
 * KONFIGURASI VITE UNTUK GITHUB PAGES
 * 
 * PENTING: Ganti nama repository di REPOSITORY_NAME
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

// ============================================
// ⚠️ KONFIGURASI GITHUB PAGES
// ============================================
// Ganti dengan nama repository Anda
const REPOSITORY_NAME = 'modern-portfolio-advanced';

// Base path untuk GitHub Pages
// Format: /nama-repository/
const base = `/${REPOSITORY_NAME}/`;

// ============================================

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  
  // Base path untuk GitHub Pages
  base: base,
  
  // Build configuration
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
  },
  
  // Resolve configuration
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@animations': resolve(__dirname, 'src/components/animations'),
      '@ui': resolve(__dirname, 'src/components/ui'),
      '@layout': resolve(__dirname, 'src/components/layout'),
      '@sections': resolve(__dirname, 'src/components/sections'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@data': resolve(__dirname, 'src/data'),
    },
  },
  
  // Server configuration
  server: {
    port: 3000,
    open: true,
  },
  
  // Preview configuration
  preview: {
    port: 4173,
    open: true,
  },
});
