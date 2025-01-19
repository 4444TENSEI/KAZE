// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { pl, zhHans } from 'vuetify/locale'
  import { THEME_MAP } from '@/hooks/map'

const primary = useStorage(THEME_MAP, 'light').value
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults: {
    VTextField: {
      variant: 'outlined',
      rounded: 'pill',
      clearable: true,
      size: 'sm',
    },
    VCard: { rounded: 'xl' },
  },
  locale: {
    locale: 'zhHans',
    fallback: 'en',
    messages: { zhHans, pl },
  },
  theme: {
    themes: {
      light: { colors: { primary } },
      dark: { colors: { primary } },
    },
  },
})
