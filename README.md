# Nuxt GrowthBook

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

> [GrowthBook](https://www.growthbook.io/) module for [Nuxt.js](https://nuxt.com/)
- [✨ &nbsp;Release Notes](https://github.com/roncallyt/nuxt-growthbook/releases)
- [📖 &nbsp;Documentation](https://nuxt-growthbook.t7n.dev)

## Features

<!-- Highlight some of the features your module provide here -->
- Nuxt 3 ready
- Typescript Support
- Automatic Configuration

## Quick Setup

1. Add `nuxt-growthbook` dependency to your project

```bash
npx nuxi module add nuxt-growthbook
```

2. Add `nuxt-growthbook` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ['nuxt-growthbook'],
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
[npm-version-src]: https://img.shields.io/npm/v/nuxt-growthbook/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-growthbook

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-growthbook.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/nuxt-growthbook

[license-src]: https://img.shields.io/npm/l/nuxt-growthbook.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-growthbook

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
