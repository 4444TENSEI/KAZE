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
  import { useCaptchaStore } from '@/stores'

  /** token状态储存 */
  const { setCaptchaToken } = useCaptchaStore()

  /** turnstile客户端密钥 */
  const CAPTCHA_KEY = import.meta.env.VITE_CAPTCHA_KEY

  /** 验证成功后得到的token */
  const turnstileToken = ref('')
  /** 需要手动点击验证 */
  const waitingAction = () => {
    console.log('请手动点击验证')
  }
  /** 验证超时 */
  const verifyExpired = () => {
    push.warning('距离上次验证已超时，请刷新页面后再试！')
  }
  /** 浏览器不支持 */
  const verifyUnsupported = () => {
    push.error('您的浏览器无法通过安全检查！')
  }
  /** 验证失败 */
  const verifyErr = (errCode: string) => {
    push.error({
      title: '设备风险警告',
      message: `${errCode}：检测到当前环境存在风险，后续操作将被拦截，请确保设备与网络安全后重新尝试。`,
      duration: 30000,
    })
  }
  onMounted(() => {
    // 每次页面加载清空验证token
    setCaptchaToken('')
  })

  watch(turnstileToken, (newToken, oldToken) => {
    // 监听验证成功后得到的token并存入pinia
    if (newToken) {
      setCaptchaToken(newToken)
    }
  })
</script>

<style lang="scss" scoped>
  .captcha_box {
    overflow: hidden;
    margin-bottom: 8px;
  }
</style>
