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
        <p class="font-weight-black cursor-default mx-auto text-h4">注册</p>
      </div>
      <form>
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
        ></v-text-field>
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
        @click="tryRegister"
      />
    </v-card>
  </body>
</template>
<script lang="ts" setup>
  import { useField, useForm } from 'vee-validate'
  import { createUser } from '@/api/user/register'
  import { changePsw } from '@/api/user/forget'

  const email = useField('email')

  // 注册输入框校验
  useForm({
    validationSchema: {
      email(value: string) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
        return '请输入正确的邮箱'
      },
    },
  })

  // 将错误信息显示到label中
  const emailLabel = computed(() => {
    return email.errorMessage.value && email.value.value ? email.errorMessage.value : '您的邮箱'
  })

  /** 创建临时账户并且发送激活验证码邮件 */
  const tryRegister = async () => {
    try {
      // 创建临时账户（随机密码）
      await createUser(email.value.value as string)
      // 发送密码重置邮件，同时能够做到激活账户
      const sendEmailResp = await changePsw(email.value.value as string)
      if (sendEmailResp) {
        push.success('请前往邮箱设置您的账户密码以激活账户')
      }
    } catch (err: any) {
      if (err.response.data.email.code === 'validation_not_unique') {
        push.error('用户已存在，请直接登录或找回密码')
      }
    }
  }
</script>
