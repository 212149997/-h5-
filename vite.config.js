import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { join } from 'path';
import postcsspxtoviewport from 'postcss-px-to-viewport';

export default defineConfig(({ mode }) => {
  // 获取`.env`环境配置文件
  const env = loadEnv(mode, process.cwd());
  return {
    base: env.VITE_BASE_PATH,
    css: {
      postcss: {
        plugins: [
          postcsspxtoviewport({
            //配置landscapeWidth和landscapeHeight，否则真实横屏样式会出现错乱
            landscapeWidth: 724,
            landscapeHeight: 355,
            unitToConvert: 'px', // 要转化的单位
            viewportWidth: 750, // UI设计稿的宽度, 375视口的宽度，对应的时设计稿的宽度/2，一般为750
            unitPrecision: 6, // 转换后的精度，即小数点位数
            propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: 'vmin', // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: 'vmin', // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            landscape: false, // 是否处理横屏情况
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
