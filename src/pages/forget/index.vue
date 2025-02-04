<template>
  <body class="flex-container justify-center align-center">
    <SpeedBtn />
    <NavLogin />
    <v-card class="card-login pa-6" rounded="xl">
      <div class="d-flex align-center mt-3 mb-8">
        <v-btn
          class="position-absolute"
          color="info"
          icon="mdi-arrow-left-bold"
          size="56"
          to="login"
          variant="tonal"
        />
        <p class="font-weight-black cursor-default mx-auto text-h4">找回密码</p>
      </div>
      <form @submit.prevent="onSubmit">
        <v-text-field
          v-model="email.value.value"
          autocomplete="email"
          class="mb-4"
          clearable
          :color="email.errorMessage.value ? 'error' : 'info'"
          :label="emailLabel"
          prepend-inner-icon="mdi-email"
          required
          rounded="pill"
        />
      </form>
      <v-btn
        block
        class="text-h6"
        color="info"
        height="56"
        rounded="pill"
        :text="$t('action.sendCode')"
        type="submit"
        variant="elevated"
        @click="tryForget"
      />
    </v-card>
  </body>
</template>
<script lang="ts" setup>
  import { useField, useForm } from 'vee-validate'
  import { changePsw } from '@/api/user/forget'

  // 注册输入框校验
  const { handleSubmit } = useForm({
    validationSchema: {
      email(value: string) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
        return '请输入正确的邮箱'
      },
    },
  })
  const email = useField('email')
  // 表单提交
  const onSubmit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
  })
  // 将错误信息显示到label中
  const emailLabel = computed(() => {
    return email.errorMessage.value && email.value.value ? email.errorMessage.value : '邮箱'
  })

  /** 创建临时账户并且发送激活验证码邮件 */
  const tryForget = async () => {
    try {
      await changePsw(email.value.value as string)
      push.success('带有密码重置的链接已发送至您的邮箱，请及时查看')
    } catch (err: any) {
      push.error('发送找回邮件失败')
    }
  }
</script>
