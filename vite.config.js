import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : 'https://alexvesp123.github.io/demo-page/',
  plugins: [react()]
})
