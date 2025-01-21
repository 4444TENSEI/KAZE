import FingerprintJS from '@fingerprintjs/fingerprintjs-pro'
import { FINGER_ID } from '@/hooks/map'

const cookie = useCookies()

// 初始化Fingerprint
if (!cookie.get(FINGER_ID)) {
  FingerprintJS.load({ apiKey: import.meta.env.VITE_FINGERPRINT_KEY })
    .then(fp => fp.get())
    .then(({ visitorId }) => {
      cookie.set(FINGER_ID, visitorId, {
        maxAge: 999999,
        secure: true,
        httpOnly: false,
      })
      console.log('FG Inited', cookie.get(FINGER_ID))
    })
}
