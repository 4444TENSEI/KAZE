import { defineStore } from 'pinia'

const useCaptchaStore = defineStore('captcha', () => {
  const captchaToken = ref('')

  function setCaptchaToken(token: string) {
    return (captchaToken.value = token)
  }
  function getCaptchaToken() {
    return captchaToken.value
  }
  function clearCaptchaToken() {
    return (captchaToken.value = '')
  }
  const withoutCaptchaToken = () => {
    return captchaToken.value ? false : true
  }

  return {
    setCaptchaToken,
    getCaptchaToken,
    clearCaptchaToken,
    withoutCaptchaToken,
  }
})

export default useCaptchaStore
