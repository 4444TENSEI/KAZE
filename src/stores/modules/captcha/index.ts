import { defineStore } from 'pinia'

const useCaptchaStore = defineStore('captcha', () => {
  const captchaToken = ref('')

  function setCaptchaToken(token: string) {
    captchaToken.value = token
  }
  function getCaptchaToken() {
    return captchaToken.value
  }
  function getCaptchaResult() {
    return captchaToken.value ? true : false
  }

  return {
    setCaptchaToken,
    getCaptchaToken,
    getCaptchaResult,
  }
})

export default useCaptchaStore
