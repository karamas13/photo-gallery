import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
    'process.env.AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN),
    'process.env.PROJECT_ID': JSON.stringify(process.env.PROJECT_ID),
    'process.env.STORAGE_BUCKET': JSON.stringify(process.env.STORAGE_BUCKET),
    'process.env.MESSAGING_SENDER_ID': JSON.stringify(process.env.MESSAGING_SENDER_ID),
    'process.env.APP_ID': JSON.stringify(process.env.APP_ID),
    
  }
})
