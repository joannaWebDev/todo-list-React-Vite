import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { UserConfigExport } from 'vitest/config';

// https://vitejs.dev/config/
const config: UserConfigExport = defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ['./setupTests.ts'],
    globals: true,
    environment: 'jsdom',
  },
});

export default config;