/**
 * ============================================
 * 📁 src/main.tsx
 * ============================================
 * 
 * ENTRY POINT APLIKASI REACT
 * 
 * File ini adalah titik masuk aplikasi.
 * Di sini kita:
 * 1. Import React dan ReactDOM
 * 2. Import global CSS
 * 3. Import komponen App
 * 4. Wrap dengan ErrorBoundary dan StrictMode
 * 5. Render ke DOM
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';

// Render aplikasi ke DOM
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
