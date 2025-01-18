import pbServer from '@/api/pocketbase'
import router from '@/router'
import { greeting } from '@/utils/greeting'
import type { LoginForm, Oa2Provider } from '@/types/login'

async function loginByOA2(provider: Oa2Provider) {
  try {
    const res = await pbServer.collection('users').authWithOAuth2({
      provider,
    })
    console.log(`${provider} 登陆成功`, res)
    // toast(`${greeting()}, ${pbServer.authStore.record?.name}`, 'success')
    router.push('/home')
  } catch (error) {
    // toast(`${provider} 登录失败:` + error)
  }
}

async function loginByEmail(form: LoginForm) {
  try {
    const res = await pbServer.collection('users').authWithPassword(form.email, form.password)
    console.log('邮箱登陆成功', res)
    // toast(`${greeting()}, ${pbServer.authStore.record?.name}`, 'success')
    router.push('/home')
  } catch (error) {
    // toast(`登录失败:` + error)
  }
}

export { loginByEmail, loginByOA2 }
