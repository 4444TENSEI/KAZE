<template>
  <body class="flex-container">
    <NavLogin />
    <v-card class="card-login pa-4">
      <div class="d-flex justify-center align-center mb-8 mt-2">
        <v-img class="mr-4" height="36" inline src="@/assets/logo.png" width="36" />
        <h1 class="cursor-default">登录</h1>
      </div>
      <form @submit.prevent="handleSubmit(submit)">
        <v-text-field
          v-model="email.value.value"
          autocomplete="email"
          class="mb-4"
          :color="email.errorMessage.value ? 'error' : 'info'"
          hide-details="false"
          :label="emailLabel"
          prepend-inner-icon="mdi-email"
          required
        />
        <v-text-field
          v-model="password.value.value"
          :append-inner-icon="pswVisible ? 'mdi-eye-off' : 'mdi-eye'"
          autocomplete="current-password"
          class="mb-2"
          :color="password.errorMessage.value ? 'error' : 'info'"
          :counter="20"
          hide-details="false"
          :label="passwordLabel"
          prepend-inner-icon="mdi-lock"
          :type="pswVisible ? 'text' : 'password'"
          @click:append-inner="pswVisible = !pswVisible"
        />
      </form>
      <div class="d-flex mb-2">
        <v-checkbox-btn color="info" label="记住" />
        <v-btn height="42" rounded="pill" text="找回" variant="flat" @click="showtoast" />
        <v-btn height="42" rounded="pill" text="注册" to="/register" variant="flat" />
      </div>
      <div class="mb-3 d-flex align-center">
        <v-btn
          class="text-h6 mr-2"
          color="primary"
          icon="mdi-broom"
          rounded="circle"
          size="56"
          variant="tonal"
          @click="handleReset"
        />
        <v-btn
          class="text-h6 flex-1-0"
          color="info"
          height="56"
          :loading="loading"
          rounded="pill"
          text="登录"
          type="submit"
          variant="elevated"
          @click="testLogin"
        />
      </div>
      <v-divider class="mb-2">
        <div class="text-no-wrap text-grey mb-2">其他方式</div>
      </v-divider>
      <LoginOA2 />
    </v-card>
  </body>
</template>

<script setup>
  import { useField, useForm } from 'vee-validate'
  import { computed, shallowRef } from 'vue'
  import { useAuth } from '@/hooks/user/auth'
  import { toast } from '@/hooks/toast'

  const router = useRouter()

  const { setAccToken, getAccToken } = useAuth()
  // 登录输入框校验
  const { handleSubmit, handleReset } = useForm({
    validationSchema: {
      email(value) {
        if (!value) return true
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
          return true
        }
        return '需要正确的邮箱格式'
      },
      password(value) {
        if (!value) return true
        if (value?.length >= 6 && value.length <= 20) return true
        return '密码6-20个字符'
      },
    },
  })
  const email = useField('email')
  const password = useField('password')
  // 表单提交
  const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
  })
  // 输入框显示隐藏小眼睛
  const pswVisible = shallowRef(false)
  // 将错误信息显示到label中
  const emailLabel = computed(() => {
    return email.errorMessage.value && email.value.value ? email.errorMessage.value : '邮箱'
  })
  const passwordLabel = computed(() => {
    return password.errorMessage.value && password.value.value
      ? password.errorMessage.value
      : '密码'
  })

  function testLogin() {
    setAccToken('123')
    toast('欢迎回来，' + getAccToken(), 'success', 5000)
    if (getAccToken()) {
      router.replace('/home')
    }
  }

  function showtoast() {
    console.log('测试气泡')
    toast('找回密码')
  }
</script>
