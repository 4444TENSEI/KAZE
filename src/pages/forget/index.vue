<template>
  <body class="flex-container justify-center align-center">
    <NavLogin />
    <v-card class="card-login pa-6" rounded="xl">
      <div class="d-flex align-center mt-3 mb-8">
        <v-btn
          class="position-absolute"
          color="info"
          icon="mdi-arrow-left-bold"
          size="56"
          to="/login"
          variant="tonal"
        />
        <p class="font-weight-black cursor-default mx-auto text-h4">找回密码</p>
      </div>
      <form>
        <v-text-field
          v-model="email.value.value"
          autocomplete="username"
          class="mb-4"
          clearable
          :color="inputColor(email.errorMessage.value)"
          :base-color="inputColor(email.errorMessage.value)"
          :label="emailLabel"
          prepend-inner-icon="mdi-email"
          required
          rounded="pill"
        />
        <Captcha />
      </form>
      <v-btn
        block
        class="text-h6"
        color="info"
        height="56"
        rounded="pill"
        :text="$t('action.sendEmail')"
        type="submit"
        variant="elevated"
        :loading="sending"
        @click="tryForget"
      />
    </v-card>
  </body>
</template>

<script lang="ts" setup>
  import { useField, useForm } from 'vee-validate'
  import { changePsw } from '@/api/user/forget'
  import { inputColor } from '@/hooks/inputColor'
  import { useCaptchaStore } from '@/stores'

  /** 发送邮件请求状态 */
  const sending = ref(false)

  /** token状态储存 */
  const { getCaptchaToken, getCaptchaResult } = useCaptchaStore()

  // 注册输入框校验
  const { handleSubmit } = useForm({
    validationSchema: {
      email(value: string) {
        if (/.+@.+\..+/.test(value)) return true
        return '邮箱格式不正确！'
      },
    },
  })
  const email = useField('email')
  // 将错误信息显示到label中
  const emailLabel = computed(() => {
    return email.errorMessage.value && email.value.value ? email.errorMessage.value : '要找回的邮箱'
  })

  /** 创建临时账户并且发送激活验证码邮件 */
  const tryForget = handleSubmit(async () => {
    if (getCaptchaResult() === false) {
      return push.error($t('message.unverified'))
    }
    try {
      sending.value = true
      await changePsw(email.value.value as string, getCaptchaToken())
      push.success({
        title: '已发送找回邮件',
        message:
          '已发送带有重置密码的链接至您的邮箱，请及时查看。若长时间未收到请检查邮箱回收站或是因为邮箱填写错误。',
        duration: 30000,
      })
    } catch (err: any) {
      if (err.response.status === 429) {
        push.error($t('message.frequently'))
      } else {
        push.error($t('message.emailSendFail'))
      }
    } finally {
      sending.value = false
    }
  })
</script>
