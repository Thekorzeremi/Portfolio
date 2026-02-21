import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Si le site est hébergé dans un sous-dossier (ex: github.io/Portfolio),
  // décommenter et adapter :
  // base: '/Portfolio/',
})
