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
        <p class="font-weight-black cursor-default mx-auto text-h4">注册</p>
      </div>
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
      <v-btn
        block
        class="text-h6"
        color="info"
        height="56"
        rounded="pill"
        :text="$t('action.sendEmail')"
        type="submit"
        variant="elevated"
        :loading="getLoading('register')"
        @click="tryRegister"
      />
    </v-card>
  </body>
</template>

<script lang="ts" setup>
  import { useField, useForm } from 'vee-validate'
  import { createUser } from '@/api/user/register'
  import { changePsw } from '@/api/user/forget'
  import { inputColor } from '@/hooks/inputColor'

  import { useCaptchaStore, useLoadingStore } from '@/stores'

  /** 请求进行状态 */
  const { setLoading, getLoading } = useLoadingStore()

  /** token状态储存 */
  const { getCaptchaToken, captchaPass } = useCaptchaStore()

  // 注册输入框校验
  const { handleSubmit } = useForm({
    validationSchema: {
      email(value: string) {
        if (/.+@.+\..+/.test(value)) return true
        return $t('form.emailInvalid')
      },
    },
  })
  const email = useField('email')

  // 将错误信息显示到label中
  const emailLabel = computed(() => {
    return email.errorMessage.value && email.value.value ? email.errorMessage.value : '您的邮箱'
  })

  /** 创建临时账户并且发送激活验证码邮件 */
  const tryRegister = handleSubmit(async () => {
    if (!captchaPass()) {
      return push.error($t('message.unverified'))
    }
    try {
      setLoading('register', true)
      // 创建临时账户（随机密码）
      await createUser(email.value.value as string, getCaptchaToken())
      // 发送密码重置邮件，同时能够做到激活账户
      const sendEmailResp = await changePsw(email.value.value as string, getCaptchaToken())
      if (sendEmailResp) {
        push.success({
          title: '账户激活邮件已发送！',
          message: '请及时检查您的收信箱，并按照指引设置账户初始密码即可激活账户。',
          duration: 30000,
        })
      }
    } catch (err: any) {
      if (err.response.status === 400) {
        push.error({ message: '用户已存在，请直接登录或找回密码', duration: 10000 })
      } else if (err.response.status === 403) {
        push.error('站点注册已关闭，如有疑问请联系站点管理员')
      } else if (err.response.status === 429) {
        push.error($t('message.frequently'))
      } else {
        push.error($t('message.emailSendFail'))
      }
    } finally {
      setLoading('register', false)
    }
  })
</script>
