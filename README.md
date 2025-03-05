# GrowthBook Nuxtify

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

> [GrowthBook](https://www.growthbook.io/) module for [Nuxt.js](https://nuxt.com/)
- [✨ &nbsp;Release Notes](https://github.com/roncallyt/growthbook-nuxtify/releases)
- [📖 &nbsp;Documentation](https://growthbook-nuxtify.t7n.dev)

## Features

<!-- Highlight some of the features your module provide here -->
- Nuxt 3 ready
- Typescript Support
- Automatic Configuration

## Quick Setup

1. Add `growthbook-nuxtify` dependency to your project

```bash
npx nuxi module add growthbook-nuxtify
```

2. Add `growthbook-nuxtify` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ['growthbook-nuxtify'],
})
```

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```
</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/growthbook-nuxtify/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/growthbook-nuxtify

[npm-downloads-src]: https://img.shields.io/npm/dm/growthbook-nuxtify.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/growthbook-nuxtify

[license-src]: https://img.shields.io/npm/l/growthbook-nuxtify.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/growthbook-nuxtify

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
