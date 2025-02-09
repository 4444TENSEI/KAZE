<template>
  <vue-turnstile
    class="captcha_box"
    :site-key="CAPTCHA_KEY"
    v-model="captchaToken"
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

  /** 验证中 */
  const verifying = push.promise($t('正在检测设备环境安全性...'))
  /** 验证成功后得到的token */
  const captchaToken = ref('')
  /** 需要手动点击验证 */
  const waitingAction = () => {
    verifying.clear()
  }
  /** 验证超时 */
  const verifyExpired = () => {
    verifying.resolve('验证超时，请检查网络环境！')
  }
  /** 浏览器不支持 */
  const verifyUnsupported = () => {
    verifying.resolve('您的浏览器无法进行安全检测！')
  }
  /** 验证失败 */
  const verifyErr = (errCode: string) => {
    verifying.reject({
      title: '设备环境风险警告',
      message: `${errCode}：检测到当前环境存在风险，需确保设备与网络环境安全才能继续访问。`,
      duration: 30000,
    })
  }

  watch(captchaToken, (newToken, oldToken) => {
    // 验证成功
    if (newToken) {
      verifying.clear()
    }
  })
  // 暴露验证后的token给父组件
  defineExpose({
    captchaToken,
  })
</script>

<style lang="scss" scoped>
  .captcha_box {
    overflow: hidden;
  }
</style>
