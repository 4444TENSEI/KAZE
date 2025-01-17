<template>
  <body class="full-container">
    <NavBar /><v-scroll class="scroll-container">
      <v-card class="overflow-y-auto" rounded="none" title="数据表名">
        <template #append>
          <v-btn icon="mdi-filter" variant="text" />
          <v-btn icon="mdi-arrow-down-bold" variant="text" />
          <v-btn icon="mdi-reload" variant="text" />
          <v-btn icon="mdi-dots-vertical" variant="text">
            <v-icon />
            <v-menu activator="parent">
              <v-list nav>
                <v-list-item append-icon="mdi-cog-outline" link title="设置" />
                <v-list-item append-icon="mdi-cog-outline" link title="隐藏" />
              </v-list>
            </v-menu>
          </v-btn>
        </template>

        <v-text-field
          v-model="search"
          class="mx-4"
          density="comfortable"
          hide-details
          placeholder="搜索"
          prepend-inner-icon="mdi-magnify"
          rounded
          variant="outlined"
        />

        <!-- hide-default-footer隐藏默认的分页，建议加上，因为自己做分页最好 -->
        <v-data-table
          fixed-header
          :headers="headers"
          :items="items"
          :search="search"
          show-select
        >
          <!-- show-select显示复选框多选框 -->
          <template #item.name="{ item }">
            <div class="d-flex align-center ga-4">
              <v-avatar color="surface-light" :image="item.avatar" />
              <span>{{ item.name }}</span>
            </div>
          </template>
          <template #item.status="{ item }">
            <v-chip
              :color="statuses[item.status]"
              label
              rounded="pill"
              size="large"
              :text="item.status"
            />
          </template>
          <!-- 操作列 -->
          <template #item.actions>
            <v-btn icon="mdi-content-copy" size="small" variant="text">
              <v-icon color="info" />
            </v-btn>
            <v-btn icon="mdi-pencil" size="small" variant="text">
              <v-icon />
            </v-btn>
            <v-btn icon="mdi-delete-outline" size="small" variant="text">
              <v-icon color="error" />
            </v-btn>
          </template>
          <!-- 开关列 -->
          <template #item.auto-renew="{ item }">
            <v-switch
              v-model="item['auto-renew']"
              :color="item['auto-renew'] ? 'success' : undefined"
              hide-details
              inset
              select-strategy="all"
              size="x-large"
            >
              <template #track-true>
                <v-icon icon="mdi-check" size="small" />
              </template>
              <template #track-false>
                <v-icon
                  class="me-1"
                  color="white"
                  icon="mdi-close"
                  size="small"
                />
              </template>
            </v-switch>
          </template>
          <template #item.rating="{ item }">
            <div class="d-flex align-center">
              {{ item.rating }}
              <v-icon color="amber-darken-2" end icon="mdi-star" />
            </div>
          </template>
        </v-data-table>
      </v-card>
    </v-scroll>
  </body>
</template>
<script setup>
  import { shallowRef } from 'vue'
  const statuses = ref({
    续期中: 'success',
    不可续期: 'error',
    暂停续期: 'warning',
  })
  const headers = ref([
    { title: '用户ID', key: 'id' },
    { title: '姓名', key: 'name' },
    { title: '自动更新', key: 'auto-renew' },
    { title: '文本内容', key: 've123ndor' },
    { title: '状态', key: 'status' },
    { title: '评分', key: 'rating' },
    { title: '操作', key: 'actions' },
  ])
  const items = ref([
    {
      avatar: 'https://picsum.photos/id/244/200/300',
      name: 'Sports Shoes',
      id: 149,
      vendor: 'Nike',
      status: '续期中',
      rating: '5.0',
    },
    {
      avatar: 'https://picsum.photos/id/244/200/300',
      name: 'Sports Shoes',
      id: 149,
      vendor: 'Nike',
      status: '续期中',
      rating: '5.0',
    },
    {
      avatar: 'https://picsum.photos/id/244/200/300',
      name: 'Sports Shoes',
      id: 149,
      vendor: 'Nike',
      status: '续期中',
      rating: '5.0',
    },
    {
      avatar: 'https://picsum.photos/id/244/200/300',
      name: 'Sports Shoes',
      id: 149,
      vendor: 'Nike',
      status: '续期中',
      rating: '5.0',
    },
    {
      avatar: 'https://picsum.photos/id/244/200/300',
      name: 'Sports Shoes',
      id: 149,
      vendor: 'Nike',
      status: '续期中',
      rating: '5.0',
    },
    {
      avatar: 'https://picsum.photos/id/244/200/300',
      name: 'Sports Shoes',
      id: 149,
      vendor: 'Nike',
      status: '续期中',
      rating: '5.0',
    },
    {
      avatar: 'https://picsum.photos/id/244/200/300',
      name: 'Sports Shoes',
      id: 149,
      vendor: 'Nike',
      status: '续期中',
      rating: '5.0',
    },
    {
      avatar: 'https://picsum.photos/id/244/200/300',
      name: 'Sports Shoes',
      id: 149,
      vendor: 'Nike',
      status: '续期中',
      rating: '5.0',
    },
    {
      avatar: 'https://picsum.photos/id/244/200/300',
      name: 'Sports Shoes',
      id: 149,
      vendor: 'Nike',
      status: '续期中',
      rating: '5.0',
    },
    {
      avatar: 'https://picsum.photos/id/244/200/300',
      name: 'Sports Shoes',
      id: 149,
      vendor: 'Nike',
      status: '续期中',
      rating: '5.0',
    },
    {
      avatar: 'https://picsum.photos/id/244/200/300',
      name: 'Sports Shoes',
      id: 149,
      vendor: 'Nike',
      status: '续期中',
      rating: '5.0',
    },
    {
      avatar: 'https://picsum.photos/id/122/200/300',
      name: 'Headphones',
      id: 79,
      vendor: 'Sony',
      status: '不可续期',
      rating: '4.5',
    },
  ])
  const search = shallowRef('')
</script>
