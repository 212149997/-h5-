export default [
  {
    //重定向
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页',
      keepAlive: true, //是否缓存路由
    },
    component: () => import('@/views/Home/index.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '注册/登录',
      keepAlive: true,
    },
    component: () => import('@/views/Login/index.vue'),
  },
  {
    path: '/partition',
    name: 'Partition',
    meta: {
      title: '分区',
      keepAlive: true,
    },
    component: () => import('@/views/Partition/index.vue'),
  },
  {
    path: '/introduction-game',
    name: 'IntroductionGame',
    meta: {
      title: '游戏介绍',
      keepAlive: true,
    },
    component: () => import('@/views/IntroductionGame/index.vue'),
  },
  {
    // path: '/404',
    path: '/:pathMatch(.*)*', // 防止浏览器刷新时路由未找到警告提示:No match found for location with path "/xxx"
    meta: {
      title: '404',
    },
    component: () => import('@/components/Error/404.vue'),
  },
];
