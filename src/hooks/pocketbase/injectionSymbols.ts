import type { InjectionKey } from 'vue'
import type PocketBase from 'pocketbase'

const pocketBaseSymbol: InjectionKey<PocketBase> = Symbol('PBServer')

export { pocketBaseSymbol }
