import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    origin: 'http://127.0.0.1',
    port: 9000,
    open: true,
  },
  plugins: [
    tailwindcss(),
    react()
  ],
})
