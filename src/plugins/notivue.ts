import { createNotivue } from 'notivue'

const notivue = createNotivue({
  // 定位
  position: 'top-center',
  // 悬浮鼠标暂停
  pauseOnHover: false,
  // 触摸屏幕暂停
  pauseOnTouch: false,
  // 切换标签页暂停
  pauseOnTabChange: true,
  // 渐入动画
  transition: 'transform 1000ms ease-in-out',
  // 避免重复弹出
  avoidDuplicates: true,
  // 最大同时显示数量
  limit: 3,
  // 同时显示上限后后续进入队列
  enqueue: true,
  notifications: {
    global: {
      duration: 3000,
    },
  },
})

export default notivue
