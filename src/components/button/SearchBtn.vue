<template>
  <!-- <v-app-bar class="ps-md-4" color="surface-variant"> -->
  <v-btn flat icon="mdi-magnify">
    <v-icon />
    <v-dialog activator="parent" max-width="550">
      <v-card class="pa-4">
        <v-text-field density="comfortable" hide-details label="想找什么？" />

        <v-list class="px-2" max-height="350" nav slim>
          <v-list-item link prepend-icon="mdi-creation" rounded title="测试">
            <template #prepend>
              <v-icon class="me-n2" size="x-small" />
            </template>

            <template #append>
              <v-avatar
                class="text-caption border border-surface-variant"
                color="surface-light"
                rounded
                size="24"
                text="A"
              />

              <span class="px-2 text-caption"> + </span>

              <v-avatar
                class="text-caption border border-surface-variant"
                color="surface-light"
                rounded
                size="24"
                text="I"
              />
            </template>
          </v-list-item>

          <v-list-subheader class="mt-2">常用</v-list-subheader>

          <v-list-item
            class="mb-1"
            link
            prepend-icon="mdi-plus"
            rounded
            title="创建工具"
          >
            <template #prepend>
              <v-icon class="me-n2" size="x-small" />
            </template>

            <template #append>
              <v-avatar
                class="text-caption border border-surface-variant"
                color="surface-light"
                rounded
                size="24"
                text="C"
              />
            </template>
          </v-list-item>

          <v-list-item
            link
            prepend-icon="mdi-arrow-right"
            rounded
            title="查找工具"
          >
            <template #prepend>
              <v-icon class="me-n2" size="x-small" />
            </template>
          </v-list-item>

          <v-list-subheader class="mt-2">群组</v-list-subheader>

          <v-list-item
            class="mb-1"
            link
            prepend-icon="mdi-arrow-right"
            rounded
            title="创建群组"
          >
            <template #prepend>
              <v-icon class="me-n2" size="x-small" />
            </template>

            <template #append>
              <v-avatar
                class="text-caption border border-surface-variant"
                color="surface-light"
                rounded
                size="24"
                text="C"
              />

              <span class="px-2 text-caption"> then </span>

              <v-avatar
                class="text-caption border border-surface-variant"
                color="surface-light"
                rounded
                size="24"
                text="O"
              />
            </template>
          </v-list-item>

          <v-list-item
            class="mb-1"
            link
            prepend-icon="mdi-arrow-right"
            rounded
            title="搜索群组"
          >
            <template #prepend>
              <v-icon class="me-n2" size="x-small" />
            </template>
          </v-list-item>

          <v-list-subheader class="mt-2">项目设置</v-list-subheader>

          <v-list-item
            class="mb-1"
            link
            prepend-icon="mdi-arrow-right"
            rounded
            title="管理"
          >
            <template #prepend>
              <v-icon class="me-n2" size="x-small" />
            </template>
          </v-list-item>

          <v-list-item link prepend-icon="mdi-arrow-right" rounded title="高级">
            <template #prepend>
              <v-icon class="me-n2" size="x-small" />
            </template>
          </v-list-item>
        </v-list>

        <v-card-actions>
          <div class="ps-4 text-caption">
            <v-kbd>回车键</v-kbd>
            选择
          </div>

          <v-spacer />

          <div class="pe-4 text-caption">
            <v-kbd>Esc</v-kbd>
            关闭
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-btn>
</template>
