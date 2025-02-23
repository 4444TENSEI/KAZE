<template>
  <iframe :src="iframeUrl" style="border: none; width: 100%; height: 5rem; margin-bottom: 0.2rem" />
</template>

<script setup lang="ts">
  import Receiver from '@mcaptcha/core-glue'
  import { useCaptchaStore } from '@/stores'

  /** 所部署mCaptcha的基础URL */
  const mCaptchaBaseUrl = import.meta.env.VITE_MCAPTCHA_BASE_URL
  /** 在mCaptcha创建的密钥 */
  const mCaptchaKey = import.meta.env.VITE_MCAPTCHA_KEY
  /** 组成iframe所需的链接 */
  const iframeUrl = `${mCaptchaBaseUrl}/widget/?sitekey=${mCaptchaKey}`

  /** 初始化验证接收器 */
  const receiver = new Receiver(
    {
      siteKey: {
        instanceUrl: new URL(mCaptchaBaseUrl),
        key: mCaptchaKey,
      },
    },
    setToken,
  )

  /** token状态储存 */
  const { setCaptchaToken, clearCaptchaToken } = useCaptchaStore()
  /** 获取到Token后的回调 */
  function setToken(token: string) {
    setCaptchaToken(token)
  }

  onMounted(() => {
    clearCaptchaToken()
    // 组件挂载时启动验证
    receiver.listen()
  })

  onUnmounted(() => {
    // 组件卸载时清理
    receiver.destroy()
  })
</script>

<style lang="scss" scoped>
  .token_text {
    color: rgba(0, 0, 0, 0.2);
    font-size: 0.8rem;
    position: relative;
    top: -0.2rem;
  }
</style>
