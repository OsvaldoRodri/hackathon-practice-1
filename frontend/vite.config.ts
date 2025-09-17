import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['localhost', '92eae4ca39c5.ngrok-free.app'],
  },
})

