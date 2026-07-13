import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/didj2/didj2build/',  // <-- Сюда обязательно добавляем папочку билда!
  build: {
    outDir: 'didj2build',
    emptyOutDir: true // Очищает папку перед новой сборкой, чтобы не плодить старые файлы
  }
})