import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      strict: false,
    },
  },
  // Ajoutez cette règle pour traiter le fichier robots.txt
  optimizeDeps: {
    include: ['robots.txt'],
  },
})
