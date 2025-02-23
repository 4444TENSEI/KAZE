<template>
  <iframe
    @error="handleIframeError"
    :src="widgetUrl"
    style="border: none; width: 100%; height: 5rem"
  />
  <p>Token: {{ captchaToken || '等待验证...' }}</p>
</template>

<script setup lang="ts">
  import Receiver, { type WidgetConfig, type SiteKey } from '@mcaptcha/core-glue'

  const handleIframeError = () => {
    push.error('错误')
  }

  // 响应式状态
  const captchaToken = ref('')
  const widgetUrl = ref('')

  // 验证配置
  const siteKey: SiteKey = {
    key: import.meta.env.VITE_MCAPTCHA_KEY,
    instanceUrl: new URL(import.meta.env.VITE_MCAPTCHA_URLA),
  }

  const config: WidgetConfig = { siteKey }

  // Token 更新回调
  const updateToken = (token: string) => {
    captchaToken.value = token
  }

  // 初始化验证接收器
  const receiver = new Receiver(config, updateToken)

  // 组件挂载时自动启动验证
  onMounted(() => {
    // 生成验证部件URL
    widgetUrl.value = receiver.widgetLink.toString()
    // 开始监听
    receiver.listen()
  })

  // 组件卸载时清理
  onUnmounted(() => {
    receiver.destroy()
  })
</script>
