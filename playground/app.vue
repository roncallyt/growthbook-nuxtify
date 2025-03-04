<script setup lang="ts">
const { $growthbook } = useNuxtApp()

const enabled = computed(() => $growthbook.isOn('my-feature'))
</script>

<template>
  <div>
    Feature Enabled: {{ enabled }}
  </div>
</template>
