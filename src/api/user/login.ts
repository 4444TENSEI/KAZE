import pb from '@/api/pocketbase'
import router from '@/router'
import { greeting } from '@/utils/greeting'
import type { LoginForm, Oa2Provider } from '@/types/login'
import { useLoadingStore } from '@/stores'
import { TABLE_USERS } from '@/config/table'

const { setLoading } = useLoadingStore()

/** 通用登录逻辑 */
async function login(authMethod: Function, ...params: any[]) {
    const logging = push.promise($t('message.logging'));
    setLoading(true);
    // 超时计时器
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject($t('message.timeout')), 20000)
    );
    await Promise.race([
      authMethod(...params).then(() => {
        logging.resolve(`${greeting()},${pb.authStore.record?.nickname}~`);
        router.push('/home');
      }).catch((err: any) => {
        logging.reject($t('message.loginFail'));
      }),
      timeoutPromise
    ]).catch((err: any) => {
      logging.reject(err);
    }).finally(() => setLoading(false));
  }
  

/**
 * OA2单点登录
 * @param provider 单点登录平台
 */
async function loginByOA2(provider: Oa2Provider) {
  await login(
    (provider: Oa2Provider) => pb.collection(TABLE_USERS).authWithOAuth2({ provider }),
    provider,
  )
}

/**
 * 表单/邮箱登录
 * @param form 登录表单数据
 */
async function loginByEmail(form: LoginForm) {
  await login(
    (form: LoginForm) => pb.collection(TABLE_USERS).authWithPassword(form.email, form.password),
    form,
  )
}

export { loginByEmail, loginByOA2 }
