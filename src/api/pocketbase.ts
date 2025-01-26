import PocketBase from 'pocketbase'
import { PB_BASE_URL } from '@/config/url'

/** PocketBase示例 */
const pb: PocketBase = new PocketBase(PB_BASE_URL)

export default pb
