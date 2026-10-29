import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { miniDb } from './server/vite-stats.js'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH || './',
  plugins: [react(), miniDb()],
})
