import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/KCM-Trade-WEB/react/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})