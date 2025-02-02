type Oa2Provider = 'github' | 'google' | 'microsoft' | 'gitlab' | 'apple' | 'discord'

interface LoginForm {
  email: string
  password: string
  emailCode?: string
}

export type { Oa2Provider, LoginForm }
