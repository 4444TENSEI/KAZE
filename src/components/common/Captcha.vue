<template>
  <vue-turnstile
    class="captcha_box"
    :site-key="CAPTCHA_KEY"
    v-model="turnstileToken"
    size="flexible"
    @expired="verifyExpired"
    @unsupported="verifyUnsupported"
    @before-interactive="waitingAction"
    @error="verifyErr"
  />
</template>

<script setup lang="ts">
  import VueTurnstile from 'vue-turnstile'

  // 载入turnstile客户端密钥
  const CAPTCHA_KEY = import.meta.env.VITE_CAPTCHA_KEY
  /** 验证成功后得到的token */
  const turnstileToken = ref('')
  /** 需要手动点击验证 */
  const waitingAction = () => {
    console.log('请手动点击验证')
  }
  /** 验证超时 */
  const verifyExpired = () => {
    push.warning('验证超时，请检查网络环境！')
  }
  /** 浏览器不支持 */
  const verifyUnsupported = () => {
    push.error('您的浏览器不支持安全检测！')
  }
  /** 验证失败 */
  const verifyErr = (errCode: string) => {
    push.error({
      title: '设备风险警告',
      message: `${errCode}：检测到当前环境存在风险，后续操作将被拦截，请确保设备与网络安全后重新尝试。`,
      duration: 30000,
    })
  }

  watch(turnstileToken, (newToken, oldToken) => {
    // 验证成功
    if (newToken) {
      console.log('已通过环境安全验证')
    }
  })
  // 暴露验证后的token给父组件
  defineExpose({
    turnstileToken,
  })
</script>

<style lang="scss" scoped>
  .captcha_box {
    overflow: hidden;
    ::v-deep iframe {
      min-width: 100px !important;
    }
  }
</style>
