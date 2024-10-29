<template>
  <v-layout>
    <v-navigation-drawer
      v-model="drawer"
      color="primary"
      disable-resize-watcher
      location="bottom"
      temporary
    >
      <v-list nav>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :active="i === 0"
          link
          :title="item.title"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar class="ps-md-4" color="surface-variant">
      <template #prepend>
        <v-app-bar-nav-icon
          v-if="$vuetify.display.smAndDown"
          @click="drawer = !drawer"
        />

        <v-img
          max-width="40"
          src="https://cdn.vuetifyjs.com/docs/images/logos/v.svg"
          width="40"
        />
      </template>

      <v-btn
        class="text-none me-2 hidden-sm-and-down"
        color="primary"
        text="Upgrade"
        variant="flat"
      />

      <template v-if="$vuetify.display.mdAndUp">
        <v-btn
          v-for="{ title } in items"
          :key="title"
          class="text-none font-weight-light me-2"
        >
          {{ title }}
        </v-btn>
      </template>

      <v-btn class="me-4" icon="mdi-magnify">
        <v-icon />

        <v-dialog activator="parent" max-width="550">
          <v-card>
            <v-text-field
              density="comfortable"
              hide-details
              label="Search for commands or content..."
            />

            <v-list class="px-2" density="compact" max-height="350" nav slim>
              <v-list-item
                link
                prepend-icon="mdi-creation"
                rounded
                title="Ask the AI"
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
                    text="A"
                  />

                  <span class="px-2 text-caption"> then </span>

                  <v-avatar
                    class="text-caption border border-surface-variant"
                    color="surface-light"
                    rounded
                    size="24"
                    text="I"
                  />
                </template>
              </v-list-item>

              <v-list-subheader class="mt-2">Projects</v-list-subheader>

              <v-list-item
                class="mb-1"
                link
                prepend-icon="mdi-plus"
                rounded
                title="Create project"
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
                title="Find projects"
              >
                <template #prepend>
                  <v-icon class="me-n2" size="x-small" />
                </template>
              </v-list-item>

              <v-list-subheader class="mt-2">Organizations</v-list-subheader>

              <v-list-item
                class="mb-1"
                link
                prepend-icon="mdi-arrow-right"
                rounded
                title="Create new organization"
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
                title="Find organizations"
              >
                <template #prepend>
                  <v-icon class="me-n2" size="x-small" />
                </template>
              </v-list-item>

              <v-list-subheader class="mt-2">Settings</v-list-subheader>

              <v-list-item
                class="mb-1"
                link
                prepend-icon="mdi-arrow-right"
                rounded
                title="Go to settings overview"
              >
                <template #prepend>
                  <v-icon class="me-n2" size="x-small" />
                </template>
              </v-list-item>

              <v-list-item
                link
                prepend-icon="mdi-arrow-right"
                rounded
                title="Manage account"
              >
                <template #prepend>
                  <v-icon class="me-n2" size="x-small" />
                </template>
              </v-list-item>
            </v-list>

            <v-card-actions>
              <div class="ps-4 text-caption">
                <v-kbd>Enter</v-kbd>
                to select
              </div>

              <v-spacer />

              <div class="pe-4 text-caption">
                <v-kbd>Esc</v-kbd>
                to close
              </div>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-btn>

      <v-divider vertical />

      <v-list-item class="text-none" height="100%" link>
        <template #prepend>
          <v-avatar
            class="me-md-2"
            color="primary"
            icon="mdi-account-outline"
          />
        </template>

        <template v-if="$vuetify.display.mdAndUp" #title> Yokaze </template>

        <template v-else #title> JL </template>

        <template v-if="$vuetify.display.mdAndUp" #subtitle>
          Personal projects
        </template>

        <v-menu activator="parent" origin="top">
          <v-list>
            <v-list-item link title="Update profile" />

            <v-list-item link title="Sign out" />
          </v-list>
        </v-menu>

        <template v-if="$vuetify.display.mdAndUp" #append>
          <v-icon icon="mdi-chevron-down" />
        </template>
      </v-list-item>
    </v-app-bar>

    <v-main height="200" />
  </v-layout>
</template>

<script setup>
import { computed, ref } from "vue";

const drawer = ref(false);

const items = computed(() => {
  return [{ title: "Feedback" }, { title: "Support" }];
});
</script>
