import PocketBase from 'pocketbase'

const pbServer: PocketBase = new PocketBase(import.meta.env.VITE_POCKETBASE_URL)

export default pbServer
