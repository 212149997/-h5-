# 开发需知

> 此项目是一套基于vue3、js、vite4的项目模板，封装了axios，vue-router，scss，配置了vite.config.js。

> 功能有：
> 1.vue3方法的自动引入。2.请求接口地址快速配置.env.dev。3.Prettier代码格式化ctrl+s保存自动格式化代码。4.eslint校验。5.网页标题快速设置
> 可以快速搭建项目进行开发

```
//安装依赖
pnpm i
//运行
pnpm run dev

//移动端需要配置：
index.html的meta标签,复制替换：
<meta name="viewport" content="width=device-width, viewport-fit=cover, initial-scale=1.0, user-scalable=no"/>
//加入了user-scalable=no禁止缩放，以防@click事件点击延迟
```

### 一、网页标题

#### 1.如果网页固定一个标题的话，请删掉router文件index.js里的document.title = to.meta.title;并且删掉routes里的meta.title属性

#### 2.如果网页随路由跳转更改标题的话，请卸载pnpm uninstall vite-plugin-html插件，再将vite.config.js的createHtmlPlugin删掉

#### 嫌麻烦的也可以不删document.title = to.meta.title会覆盖vite.config.js配置的网页标题

### 二、请求地址

> 修改.env.dev等文件更改请求地址
> 调用api接口示例：

```
import apiList from '@/api'
res = await apiList.demo.time();
```

> 若要加入token等在拦截器里，修改utils里的request.js

### 三、安装pinia

#### 一、安装

```shell
pnpm install pinia
```

#### 二、配置

> 创建store文件夹，然后创建index.js和modules文件夹

```
// index.js
import { createPinia } from 'pinia';
//对外暴露大仓库
export default createPinia();
```

```
//User仓库,user.js
import { defineStore } from "pinia";
const useUserStore = defineStore('User', {
    state: (): UserState => {
        return {
            token: '',
            userInfo: {}
        }
    },
    actions: {
    },
    getters: {
    }
});

export default useUserStore;
```

#### 三、使用

```
import useDetailStore from "@/store/modules/user";
const userStore = useHomeStore()
const { userInfo } = storeToRefs(homeStore)
```

#### 五、持久化存储 `pinia-plugin-persistedstate`

上面的配置浏览器一刷新数据就丢了，所以配置下持久化存储。

```

pnpm i pinia-plugin-persistedstate

```

```

// 持久化存储src/main.js
import { createPersistedState } from 'pinia-plugin-persistedstate';
pinia.use(
createPersistedState({
auto: true, // 启用所有 Store 默认持久化
}),
);

```

#### tips: pinia持久化的无法通过 `window.localStorage.clear();` 一键清空数据

```js
window.localStorage.setItem('user2', 'hello');
// window.localStorage.removeItem('user2');

// tips: pinia持久化的无法通过这种方式清空数据，只能删除同样方式存储的值 eg: window.localStorage.setItem('user2', 'hello');
window.localStorage.clear();
window.sessionStorage.clear();
```

#### $reset() 清空数据

```
// 退出登录
function logout() {
  isLogin.value = false;
  // 清空当前store在pinia中持久化存储的数据
  this.$reset();

  // 其它store
  store.settings.useSettingsStore().$reset();

  // 最终真正清空storage数据
  window.localStorage.clear();
  window.sessionStorage.clear();
}
```
