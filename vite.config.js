import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['three'],
      output: {
        globals: {
          'three': 'THREE'
        }
      }
    }
  },
  server: {
    port: 3000
  }
})
