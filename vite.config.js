import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path'; //node.js 的 path 模块
import Components from 'unplugin-vue-components/vite'; // 插件的自动导入
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'; // naiveUI导入
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'; // svg 雪碧图

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/icons')], // 指定需要缓存的图标文件夹
      symbolId: 'icon-[dir]-[name]', // 指定symbolId格式
    }),
    Components({ resolvers: [NaiveUiResolver()] }), // 自动导入 NavieUI
  ],
  // 配置别名
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
