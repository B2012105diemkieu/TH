import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  //them cau hinh port
  server: {
    port: 3001,
    //cau hinh proxy (khong gan cung hostname/IP cua API server)
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        changeOrigin:true,
      },

    }
  },
});
