import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    'process.env': {
      // comment this line to containerize
      VUE_APP_API_URL: "http://localhost:8000",
      VUE_APP_API_URL_AVATAR: "http://localhost:8000/storage",
      // uncomment this line to containerize
      // VUE_APP_API_URL: "http://api.mycustomdomain.com"
      // VUE_APP_API_URL_AVATAR: "http://api.mycustomdomain.com/storage",

    }
  },
})
