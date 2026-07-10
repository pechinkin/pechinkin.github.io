import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/didj2/',  // <-- это главное!
  build: {
    outDir: 'didj2build'  // папка, куда соберется проект (в корне репозитория)
  }
})