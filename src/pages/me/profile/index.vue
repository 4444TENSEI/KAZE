<template>
  <div class="flex-container justify-center">
    <v-app-bar border="b" class="position-fixed" density="comfortable" flat order="1">
      <v-app-bar-title
        class="font-weight-black cursor-default"
        style="font-size: 1.4rem; letter-spacing: 0em; line-height: 1"
      >
        <v-btn icon="mdi-arrow-left" tonal @click="router.go(-1)" />
        个人中心
      </v-app-bar-title>
      <TestBtn />
      <ThemeBtn />
    </v-app-bar>
    <v-card>
      <v-list nav>
        <v-list-item
          v-for="field in profileFields"
          :key="field.key"
          link
          @click="onItemClick(field)"
        >
          <v-icon class="mr-6">{{ field.icon }}</v-icon>
          <span>{{ field.label }} {{ field.value }}</span>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
  import { getProfile } from '@/api/user/profile'
  import { reactive, computed, onMounted } from 'vue'
  import router from '@/router'

  // 定义字段枚举
  const fieldMap = [
    { key: 'id', label: 'ID', icon: 'mdi-identifier' },
    { key: 'name', label: '昵称', icon: 'mdi-account' },
    { key: 'email', label: '邮箱', icon: 'mdi-email' },
    { key: 'emailVisibility', label: '邮箱可见性', icon: 'mdi-eye' },
    { key: 'avatar', label: '头像', icon: 'mdi-image' },
    { key: 'background', label: '背景', icon: 'mdi-wallpaper' },
    { key: 'verified', label: '已验证', icon: 'mdi-check-circle' },
  ]

  // 用户数据
  const profile = reactive({
    id: 0,
    name: '',
    email: '',
    emailVisibility: false,
    avatar: '',
    background: '',
    verified: false,
  })

  // 生成动态展示字段
  const profileFields = computed(() =>
    fieldMap.map(field => ({
      ...field,
      value: profile[field.key as keyof typeof profile] ?? '无',
    })),
  )

  // 点击列表项（当前无功能）
  const onItemClick = (field: { key: string; label: string; value: any }) => {
    console.log(`点击了字段: ${field.label}`, field)
  }

  // 获取用户信息
  const getProfileInfo = async () => {
    try {
      const res = await getProfile()
      Object.assign(profile, res) // 更新 reactive 数据
    } catch (error) {
      console.error('获取用户信息失败:', error)
    }
  }

  onMounted(() => {
    getProfileInfo()
  })
</script>

<style lang="scss" scoped>
  .v-card {
    width: 720px;
    margin: 1rem;
    max-width: 94vw;
  }
</style>
