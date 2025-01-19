import { createNotivue } from 'notivue'

const notivue = createNotivue({
  // 定位
  position: 'top-center',
  // 悬浮鼠标暂停
  pauseOnHover: true,
  // 触摸屏幕暂停
  pauseOnTouch: true,
  // 切换标签页暂停
  pauseOnTabChange: true,
  // 渐入动画
  transition: 'transform 1s cubic-bezier(0.5, 1, 0.25, 1)',
  // 避免重复弹出
  avoidDuplicates: false,
  // 最大同时显示数量
  limit: 5,
  // 同时显示上限后后续进入队列
  enqueue: true,
  notifications: {
    global: {
      duration: 5000,
    },
  },
})

export default notivue
