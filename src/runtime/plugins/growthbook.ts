import { GrowthBook } from '@growthbook/growthbook'
import { defineNuxtPlugin, useRuntimeConfig } from '#imports'

export interface PluginReturn {
  growthbook: GrowthBook | null
}

const plugin = defineNuxtPlugin({
  name: 'growthbook',
  enforce: 'pre',
  setup: async (_) => {
    const config = useRuntimeConfig().public.growthbook

    if (!config.enabled) {
      return {
        provide: {
          growthbook: null as GrowthBook | null,
        },
      }
    }

    const growthbook = new GrowthBook({
      apiHost: config.apiHost,
      clientKey: config.clientKey,
      enableDevMode: config.enableDevMode,
      trackingCallback: (experiment, result) => {
        console.log('Viewed Experiment', {
          experimentId: experiment.key,
          variationId: result.key,
        })
      },
    })

    await growthbook.init({ streaming: true })

    return {
      provide: {
        growthbook,
      },
    }
  },
})

export default plugin
