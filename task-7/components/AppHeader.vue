<script lang="ts" setup>
import { useCarStore } from '~/store/carStore'
import { storeToRefs } from 'pinia';
import { HeartIcon, BellIcon, Cog6ToothIcon } from '@heroicons/vue/24/solid'

const carStore = useCarStore()
storeToRefs(carStore)

const searchInput = ref('')

watch(() => searchInput.value, async () => {
    carStore.searchCars(searchInput.value)
})
</script>

<template>
    <div class="bg-white border border-gray">
        <div class="container mx-auto flex justify-between py-10">
            <div class="flex justify-center h-11">
                <NuxtLink to="/" class="flex justify-center items-center mr-20">
                    <SVGLogo />
                </NuxtLink>
                <FormKit type="search" prefix-icon="search" suffix-icon="settings" placeholder="Search something here"
                    maxlength="20" v-model="searchInput">
                </FormKit>
            </div>
            <div class="icons flex gap-5 h-11">
                <NuxtLink to="/likedCars"
                    class="flex justify-center items-center w-11 h-11 border border-solid border-gray-300 rounded-full hover:border-gray-500 ease-in duration-200">
                    <HeartIcon class="w-6 h-6" />
                </NuxtLink>

                <NuxtLink to="/"
                    class="flex justify-center items-center w-11 h-11 border border-solid border-gray-300 rounded-full hover:border-gray-500 ease-in duration-200">
                    <BellIcon class="w-6 h-6" />
                </NuxtLink>
                <NuxtLink to="/"
                    class="flex justify-center items-center w-11 h-11 border border-solid border-gray-300 rounded-full hover:border-gray-500 ease-in duration-200">
                    <Cog6ToothIcon class="w-6 h-6" />
                </NuxtLink>
                <NuxtLink to="/">
                    <img src="/images/other/profil.png" class="h-11 w-11">
                </NuxtLink>
            </div>
        </div>
    </div>
</template>