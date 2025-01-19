import { createNotivue } from 'notivue'

const notivue = createNotivue({
  // 定位
  position: 'top-center',
  // 悬浮鼠标暂停
  pauseOnHover: true,
  // 触摸屏幕暂停
  pauseOnTouch: true,
  // 渐入动画
//   transition: '',
  // 避免重复弹出
  avoidDuplicates: false,
  notifications: {
    global: {
      duration: 30000,
    },
  },
})

export default notivue
