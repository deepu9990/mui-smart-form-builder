import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to repository name for GitHub Pages (adjust if user/org pages)
  base: '/mui-smart-form-builder/'
})
