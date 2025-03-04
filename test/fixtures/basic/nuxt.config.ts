import { resolve } from 'node:path'

export default defineNuxtConfig({
  modules: [
    'nuxt-growthbook',
  ],
  alias: {
    'nuxt-growthbook': resolve(__dirname, '../../../src/module.ts'),
  },
  growthbook: {
    enabled: true,
    apiHost: 'http://localhost:4100',
    clientKey: 'sdk-XXXXXXXXXXXXX',
    enableDevMode: true,
  },
})
