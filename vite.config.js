import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/rounak_patidar-portfolio/',   // MUST end with "/"
  plugins: [react()],
})
