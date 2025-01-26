import FingerprintJS from '@fingerprintjs/fingerprintjs-pro'
import { FINGER_KEY } from '@/config/key'

const cookie = useCookies()

// 初始化Fingerprint
if (!cookie.get(FINGER_KEY)) {
  FingerprintJS.load({ apiKey: import.meta.env.VITE_FINGERPRINT_KEY })
    .then(fp => fp.get())
    .then(({ visitorId }) => {
      cookie.set(FINGER_KEY, visitorId, {
        maxAge: 999999,
        secure: true,
        httpOnly: false,
      })
      console.log('FG Inited', cookie.get(FINGER_KEY))
    })
}
