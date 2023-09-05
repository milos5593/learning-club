<script setup lang="ts">
import { createPinia } from 'pinia'
createPinia()

useSeoMeta({
  titleTemplate: 'Car rent',
  description: 'The Best Platform for Car Rental'
})
useHead({
  link: [
    { rel: 'icon', type: 'image', href: '/favicon.png' }
  ]
})
</script>

<template>
  <NuxtLayout class="max-w-full">
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.nuxt-icon {
  margin-bottom: 0;
}

.svg {
    width: 24px;
    height: 24px;
}
</style>