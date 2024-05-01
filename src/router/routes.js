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
      title: '马拉松健身全景游戏',
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
    path: '/my',
    name: 'My',
    meta: {
      title: '个人中心',
      keepAlive: true,
    },
    component: () => import('@/views/My/index.vue'),
  },
  {
    path: '/selection-track',
    name: 'SelectionTrack',
    meta: {
      title: '选择赛道',
      keepAlive: true,
    },
    component: () => import('@/views/SelectionTrack/index.vue'),
  },
  {
    path: '/challenge-mode',
    name: 'ChallengeMode',
    meta: {
      title: '挑战模式',
      keepAlive: true,
    },
    component: () => import('@/views/ChallengeMode/index.vue'),
  },
  {
    path: '/pk',
    name: 'Pk',
    meta: {
      title: 'Pk',
      keepAlive: true,
    },
    component: () => import('@/views/Pk/index.vue'),
  },
  {
    path: '/train-mode',
    name: 'TrainMode',
    meta: {
      title: '训练模式',
      keepAlive: true,
    },
    component: () => import('@/views/TrainMode/index.vue'),
  },
  {
    path: '/running-instructor',
    name: 'RunningInstructor',
    meta: {
      title: '跑步指导',
    },
    component: () => import('@/views/RunningInstructor/index.vue'),
  },
  {
    path: '/food-match',
    name: 'FoodMatch',
    meta: {
      title: '饮食搭配',
      keepAlive: true,
    },
    component: () => import('@/views/FoodMatch/index.vue'),
  },
  {
    path: '/individuation',
    name: 'Individuation',
    meta: {
      title: '个性化训练',
      keepAlive: true,
    },
    component: () => import('@/views/Individuation/index.vue'),
  },
  {
    path: '/data-analysis',
    name: 'DataAnalysis',
    meta: {
      title: '数据分析',
      keepAlive: true,
    },
    component: () => import('@/views/DataAnalysis/index.vue'),
  },
  {
    path: '/online-competition',
    name: 'OnlineCompetition',
    meta: {
      title: '线上赛事',
      keepAlive: true,
    },
    component: () => import('@/views/OnlineCompetition/index.vue'),
  },
  {
    path: '/start-run',
    name: 'StartRun',
    meta: {
      title: '开始跑步',
      keepAlive: true,
    },
    component: () => import('@/views/StartRun/index.vue'),
  },
  {
    path: '/introduction-competition',
    name: 'IntroductionCompetition',
    meta: {
      title: '赛事介绍',
      keepAlive: true,
    },
    component: () => import('@/views/IntroductionCompetition/index.vue'),
  },
  {
    path: '/improve-competition-information',
    name: 'ImproveCompetitionInformation',
    meta: {
      title: '完善赛事信息',
      keepAlive: true,
    },
    component: () => import('@/views/ImproveCompetitionInformation/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*', // 防止浏览器刷新时路由未找到警告提示:No match found for location with path "/xxx"
    meta: {
      title: '404',
    },
    component: () => import('@/components/Error/404.vue'),
  },
];
