import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['localhost', 'aaf3d8de7dd5.ngrok-free.app'],
  },
})

