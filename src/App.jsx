import React, { Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import AppRouter from './router/AppRouter';
import './App.css';

export default function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<div className="app-loading">Loading...</div>}>
        <AppRouter />
      </Suspense>
    </ThemeProvider>
  );
}
