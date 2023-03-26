// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist'
  },
  plugins: [
    react(),
    tsconfigPaths(),
    svgr()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/config/setupTests.ts']
  }
})
