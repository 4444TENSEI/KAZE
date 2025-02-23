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
  const captchaPass = () => {
    return captchaToken.value ? true : false
  }

  return {
    setCaptchaToken,
    getCaptchaToken,
    clearCaptchaToken,
    captchaPass,
  }
})

export default useCaptchaStore
