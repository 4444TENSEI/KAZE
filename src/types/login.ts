type Oa2Provider = 'github' | 'google' | 'gitlab' | 'discord' | 'gitee'

interface LoginForm {
  email: string
  password: string
  emailCode?: string
}

export type { Oa2Provider, LoginForm }
