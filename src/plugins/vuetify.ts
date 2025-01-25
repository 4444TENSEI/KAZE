// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { pl, zhHans } from 'vuetify/locale'
import { THEME_KEY } from '@/hooks/map'

const surface = useStorage(THEME_KEY, '').value

export default createVuetify({
  defaults: {
    VTextField: {
      variant: 'outlined',
      rounded: 'pill',
      clearable: true,
      size: 'sm',
    },
    VCard: { rounded: 'lg' },
  },
  locale: {
    locale: 'zhHans',
    fallback: 'en',
    messages: { zhHans, pl },
  },
  theme: {
    themes: {
      light: { colors: { surface } },
    },
  },
})
