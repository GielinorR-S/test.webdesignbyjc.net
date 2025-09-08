import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',  // 🔹 ensures JS/CSS/assets paths are relative
  server: {
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
})