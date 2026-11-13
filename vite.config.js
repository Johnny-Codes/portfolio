import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Multi-page build: each HTML entry is a real page that gets prerendered
// (see scripts/prerender.mjs). Add new pages here and in src/pages.js.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        websites: fileURLToPath(new URL('./websites/index.html', import.meta.url)),
      },
    },
  },
})
