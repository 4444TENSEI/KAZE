// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import { pl, zhHans } from 'vuetify/locale'

const KazeTheme = {
  dark: true,
  colors: {
    background: '#0d1b2a',
    surface: '#1c2e3f',
    primary: '#2196f3',
    secondary: '#64b5f6',
    error: '#ff5252',
    info: '#2196f3',
    success: '#4caf50',
    warning: '#ff9800',
  },
}

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
    fallback: 'sv',
    messages: { zhHans, pl },
  },
  theme: {
    defaultTheme: 'KazeTheme',
    themes: {
      KazeTheme,
    },
  },
})
