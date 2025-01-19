import vuetify from './vuetify'
import notivue from './notivue'
import router from '@/router'
import pinia from '@/stores'
import i18n from '@/i18n'

import type { App } from 'vue'

export function registerPlugins(app: App) {
  app.use(vuetify).use(router).use(pinia).use(i18n).use(notivue)
}
