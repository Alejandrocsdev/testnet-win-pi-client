import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  console.info('Mode:', mode)
  if (mode === 'development') {
    console.info('Sandbox URL: https://sandbox.minepi.com/app/win-pi-96e6e43831e198a6')
  }

  return {
    plugins: [react()],
    server: { port: 5200 }
  }
})
