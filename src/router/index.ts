import { createRouter, createWebHashHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'
import pb from '@/api/pocketbase'
import { refreshAuth } from '@/api/user/auth'
import { useUserInfoStore } from '@/stores'

// 无需登录即可访问的公开路由
const PUBLIC_ROUTES = ['/login', '/register', '/forget']

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

router.beforeEach(async (to, from, next) => {
  // 已登录
  if (pb.authStore.isValid) {
    console.log('已登录')
    // 每次切换路由都从服务端获取、刷新用户状态
    refreshAuth()
      .then(resp => {
        useUserInfoStore().updateUserInfo()
        console.log('已刷新用户登录状态+本地数据', resp)
      })
      .catch(err => {
        push.warning('登录状态已失效，请重新登录！')
        pb.authStore.clear()
        next('/login')
      })
  }
  // 未登录
  else {
    console.log('未登录')
    // 访问非公开路由
    if (!PUBLIC_ROUTES.includes(to.path)) {
      next('/login')
    }
  }
  next()
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
