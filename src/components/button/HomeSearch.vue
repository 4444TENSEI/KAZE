<template>
  <!-- <v-app-bar class="ps-md-4" color="surface-variant"> -->
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
</template>
