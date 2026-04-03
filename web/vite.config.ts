import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub project page: https://<user>.github.io/Petukhova-Lab/
export default defineConfig({
  plugins: [react()],
  base: '/Petukhova-Lab/',
})
