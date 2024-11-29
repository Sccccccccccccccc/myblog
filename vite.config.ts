import { defineConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      // 引入全局scss(不要在APP.vue使用里使用scoped，否则样式会失效)
      // https://blog.csdn.net/kaixing1967/article/details/143210418
      scss: {
        additionalData: `@use "@/assets/styles/base.scss";`,
      },
    },
  },
  base: "./",
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    // 配置路径别名
    alias: 
      // 配置 @ 指代 src
      {
        '@': path.resolve('src'),
      },

    // https://blog.csdn.net/u010281877/article/details/116491779
    // 配置文件后缀名
    // extensions: [".js", ".vue", ".json"],
  },
})
