import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/oag/' : '/', // 👈 local = "/", build = "/oag/"
  build: {
    outDir: 'dist',
  },
}))
