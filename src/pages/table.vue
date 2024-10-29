<template>
  <v-container >
    <v-card rounded="lg" title="数据库表名">
      <template #append>
        <v-btn icon="mdi-filter" variant="text"></v-btn>
        <v-btn icon="mdi-arrow-down-bold" variant="text"></v-btn>
        <v-btn icon="mdi-reload" variant="text"></v-btn>
        <v-btn icon="mdi-dots-vertical" variant="text">
          <v-icon />
          <v-menu activator="parent">
            <v-list>
              <v-list-item link title="设置" />

              <v-list-item link title="隐藏" />
            </v-list>
          </v-menu>
        </v-btn>
      </template>

      <div class="px-4">
        <v-text-field
          v-model="search"
          density="comfortable"
          hide-details
          placeholder="Search"
          prepend-inner-icon="mdi-magnify"
          rounded
          variant="outlined"
        />
      </div>

      <div class="pa-4">
        <v-data-table
          :headers="headers"
          hide-default-footer
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
              size="large"
              rounded="pill"
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
              density="compact"
              hide-details
              select-strategy="all"
              size="x-large"
              inset
            >
              <!-- 开关可以加一个loading="info"转圈圈 -->
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

          <!-- 按钮 -->
          <template #item.rating="{ item }">
            <div class="d-flex align-center">
              {{ item.rating }}
              <v-icon color="amber-darken-2" end icon="mdi-star" />
            </div>
          </template>
        </v-data-table>
      </div>
    </v-card>
  </v-container>
</template>

<script setup>
import { shallowRef } from "vue";

const statuses = {
  续期中: "success",
  不可续期: "error",
  暂停续期: "warning",
};

const headers = [
  { title: "用户ID", key: "id" },
  { title: "姓名", key: "name" },
  { title: "自动更新", key: "auto-renew" },
  { title: "文本内容", key: "vendor" },
  { title: "状态", key: "status" },
  { title: "Rating", key: "rating" },
  { title: "Actions", key: "actions" },
];

const items = [
  {
    avatar: "https://picsum.photos/id/244/200/300",
    name: "Sports Shoes",
    id: 149,
    vendor: "Nike",
    status: "续期中",
    rating: "5.0",
  },
  {
    avatar: "https://picsum.photos/id/122/200/300",
    name: "Headphones",
    id: 79,
    vendor: "Sony",
    status: "不可续期",
    rating: "4.5",
  },
  {
    avatar: "https://picsum.photos/id/312/200/300",
    name: "Smart Watch",
    id: 299,
    vendor: "Apple",
    status: "续期中",
    rating: "4.8",
  },
  {
    avatar: "https://picsum.photos/id/420/200/300",
    name: "Wireless Mouse",
    id: 29,
    vendor: "Logitech",
    status: "续期中",
    rating: "4.2",
  },
  {
    avatar: "https://picsum.photos/id/600/200/300",
    name: "Wireless Keyboard",
    id: 49,
    vendor: "Logitech",
    status: "其他",
    rating: "4.0",
  },
];

const search = shallowRef("");
</script>
