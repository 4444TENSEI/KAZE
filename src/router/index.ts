import { createRouter, createWebHashHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'
import pbServer from '@/api/pocketbase'

// 获取用户登陆状态
const isLoggedIn = !!pbServer.authStore.token
// 公开访问的路由
const PUBLIC_ROUTES = ['/', '/login', '/register', '/forget']

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    ...setupLayouts(routes),
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/pages/common/404/index.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (PUBLIC_ROUTES.includes(to.path)) {
    // 已登录用户访问公共路由，重定向到首页
    if (isLoggedIn) {
      console.log('已登陆')
      next('/home')
    } else {
      next()
    }
  } else {
    // 未登录用户访问内部路由，重定向到首页登录页
    if (!isLoggedIn) {
      push.error('请先登录哦')
      next('/login')
    } else {
      next()
    }
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    // 如果错误信息中包含“无法获取动态导入的模块”
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      // 如果本地存储中没有“vuetify:dynamic-reload”项
      console.log('重新加载页面以修复动态导入错误')
      localStorage.setItem('vuetify:dynamic-reload', 'true') // 设置本地存储项
      location.assign(to.fullPath) // 重定向到目标路由的完整路径
    } else {
      // 如果重新加载页面后仍然出现错误
      console.error('动态导入错误，重新加载页面未能解决问题', err)
    }
  } else {
    // 如果错误与动态导入模块无关
    console.error(err)
  }
})

export default router
