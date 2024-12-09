import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import legacy from "@vitejs/plugin-legacy"
export default defineConfig({

  plugins: [
    vue(),
    legacy({
      targets: ["ie>=11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    })
  ],
  build: {
    // target: ['es2015', 'chrome63'], // 默认是modules,百度说是更改这个会去输出兼容浏览器，尝试没啥作用，先配置吧
    target: "modules", // 默认是modules,百度说是更改这个会去输出兼容浏览器，尝试没啥作用，先配置吧
  },
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
