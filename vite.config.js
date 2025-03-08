import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  console.info('Mode:', mode)
  if (mode === 'development') {
    console.info('Sandbox URL:', env.SANDBOX)
  }
  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: Number(env.PORT)
    }
  }
})
