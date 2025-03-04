import { addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'
import { defu } from 'defu'
import type { NuxtModule } from 'nuxt/schema'

export interface ModuleOptions {
  /**
   *
   * The status of GrowthBook on this project.
   * @default true
   * @type boolean
   */
  enabled: boolean

  /**
   *
   * GrowthBook's API Host
   * @default process.env.GROWTHBOOK_API_HOST
   * @example 'http://localhost:3100'
   * @type string
   * @docs https://docs.growthbook.io/self-host/env#domains-and-ports
   */
  apiHost: string

  /**
   *
   * GrowthBook's Client Key
   * @default process.env.GROWTHBOOK_CLIENT_KEY
   * @example 'sdk-XXXXXXXXXXXXXXXX'
   * @type string
   * @docs https://docs.growthbook.io/lib/script-tag#installation
   */
  clientKey: string

  /**
   *
   * If true, enable GrowthBook's devtools, allowing you to debug and test your
   * feature flags.
   * @default true
   * @type boolean
   * @docs https://docs.growthbook.io/lib/js#dev-mode
   */
  enableDevMode: boolean
}

const module: NuxtModule<ModuleOptions> = defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'growthbook',
    configKey: 'growthbook',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },

  defaults: {
    enabled: true,
    apiHost: process.env.GROWTHBOOK_API_HOST as string,
    clientKey: process.env.GROWTHBOOK_CLIENT_KEY as string,
    enableDevMode: true,
  },

  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.growthbook = defu<ModuleOptions, ModuleOptions[]>(
      nuxt.options.runtimeConfig.public.growthbook,
      {
        enabled: options.enabled,
        apiHost: options.apiHost,
        clientKey: options.clientKey,
        enableDevMode: options.enableDevMode,
      },
    )

    const enabled = nuxt.options.runtimeConfig.public.growthbook.enabled

    if (enabled && !nuxt.options.runtimeConfig.public.growthbook.apiHost) {
      console.warn('Está faltando o endereço da API do Growthbook, defina isso no `nuxt.config.ts` ou via variável de ambiente.')
    }

    if (enabled && !nuxt.options.runtimeConfig.public.growthbook.clientKey) {
      console.warn('Está faltando a chave do cliente do Growthbook, defina isso no `nuxt.config.ts` ou via variável de ambiente.')
    }

    addPlugin(resolve('./runtime/plugins/growthbook'))
  },
})

export default module
