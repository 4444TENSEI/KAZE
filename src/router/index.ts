import { createRouter, createWebHashHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'
import pbServer from '@/api/pocketbase'

// 公开访问的路由
const publicRoutes = ['/login', '/register', '/forget']

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
  const isLoggedIn = !!pbServer.authStore.token
  if (!isLoggedIn && !publicRoutes.includes(to.path)) {
    push.error('请先登录哦')
    next('/login')
  } else if (isLoggedIn && to.path === '/login') {
    next('/home')
  } else {
    next()
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
