import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { join } from 'path';
import postCssPxToRem from 'postcss-pxtorem';

export default defineConfig(({ mode }) => {
  // 获取`.env`环境配置文件
  const env = loadEnv(mode, process.cwd());
  return {
    base: env.VITE_BASE_PATH,
    css: {
      postcss: {
        plugins: [
          postCssPxToRem({
            //自适应，px>rem转换
            rootValue: 37.5, //75表示750设计稿，37.5表示375设计稿
            propList: ['*'], //要转换的属性，这里选择全部都进行
          }),
        ],
      },
    },
    plugins: [
      vue(),
      // 解决 `import { ref , reactive ..... } from 'vue'` 大量引入的问题
      AutoImport({
        imports: ['vue', 'vue-router'], //自动引入
      }),
      //替换网站标题
      createHtmlPlugin({
        inject: {
          data: {
            title: env.VITE_APP_TITLE,
          },
        },
      }),
    ],
    resolve: {
      // 配置路径别名
      alias: {
        '@': join(__dirname, 'src'),
        '@utils': join(__dirname, 'src/utils'),
      },
    },
    // 反向代理解决跨域问题
    server: {
      host: '0.0.0.0', // 局域网别人也可访问
      port: Number(env.VITE_APP_PORT), //端口号
      // open: true,// 运行时自动打开浏览器
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_SERVICE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), ''),
        },
      },
    },
    //打包配置
    build: {
      outDir: env.VITE_OUT_DIR || 'dist',
      terserOptions: {
        compress: {
          drop_debugger: env.VITE_DROP_DEBUGGER === 'true',
          drop_console: env.VITE_DROP_CONSOLE === 'true',
        },
      },
    },
  };
});
