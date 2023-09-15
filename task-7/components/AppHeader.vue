<script lang="ts" setup>
import { useCarStore } from '~/store/carStore'
import { storeToRefs } from 'pinia';
import { HeartIcon, BellIcon, Cog6ToothIcon } from '@heroicons/vue/24/solid'
// import { FormKit } from "@formkit/vue";
const carStore = useCarStore()
storeToRefs(carStore)
const route = useRoute()
const searchInput = ref('')

watch(() => searchInput.value, async () => {
    const searchBy = searchInput.value
    await carStore.searchCars(searchBy)
})
</script>

<template>
    <div class="bg-white border border-gray">
        <div class="container mx-auto flex justify-between py-10">
            <!-- <div class="flex items-center"> -->
            <div class="flex">
                <a href="/">
                    <SVGLogo class="mr-20" />
                </a>
                <FormKit type="search" prefix-icon="search" suffix-icon="settings" placeholder="Search something here"
                    maxlength=20 v-model="searchInput">
                </FormKit>
            </div>
            <div class="icons flex gap-5">
                <NuxtLink to="/likedCars"
                    class="p-3 border border-solid border-gray-300 rounded-full hover:border-gray-500 ease-in duration-200">
                    <HeartIcon class="w-6" />
                </NuxtLink>

                <button
                    class="p-3 border border-solid border-gray-300 rounded-full hover:border-gray-500 ease-in duration-200">
                    <BellIcon class="w-6" />
                </button>
                <button
                    class="p-3 border border-solid border-gray-300 rounded-full hover:border-gray-500 ease-in duration-200">
                    <Cog6ToothIcon class="w-6" />
                </button>
                <button>
                    <img src="/images/other/profil.png">
                </button>
            </div>
        </div>
    </div>
</template>