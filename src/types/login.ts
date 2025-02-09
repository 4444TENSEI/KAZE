type Oa2Provider = 'github' | 'google' | 'gitlab' | 'discord' | 'gitee'

interface LoginForm {
  email: string
  password: string
  captchaToken?: string
}

export type { Oa2Provider, LoginForm }
