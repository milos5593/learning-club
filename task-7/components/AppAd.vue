<script lang="ts" setup>
const props = defineProps(['ad'])
</script>

<template>
    <div class="cr__ad w-1/2 bg-blue-700 p-10 rounded-lg">
        <div class="cr__adText w-1/2">
            <h2 class="text-3xl leading-normal">{{ ad.header }}</h2>
            <h4 class="my-5">{{ ad.text }}</h4>
        </div>
        <NuxtLink to="/cars" class="px-5 py-3 rounded-md bg-blue-400">{{ ad.ctaLabel }}</NuxtLink>
        <img :src="ad.image" alt="ad-2" class="m-auto">
    </div>
</template>