<script lang="ts" setup>
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