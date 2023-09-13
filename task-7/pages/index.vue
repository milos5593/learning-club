<script setup lang="ts">
import { useCarStore } from '~/store/carStore'
import { useAdStore } from '~/store/adStore'

const carStore = useCarStore()
const adStore = useAdStore()

await adStore.fetchAds()
await carStore.fetchCars()

const ads = adStore.ads

const popularCars = await carStore.getPopularCars
const recomCars = await carStore.getRecomCars
</script>

<template>
    <div class="mainDiv container mx-auto bg-gray-100 pt-8 pb-16">
        <div class="cr__ads flex gap-10 text-white mb-10">
            <AppAd v-for="ad in ads" :ad="ad" />
        </div>
        <AppReservation />
        <div class="cr__cars">
            <div class="cr__popularTitle flex justify-between mx-6 mt-10">
                <h4 class="text-gray-500">Popular Car</h4>
                <button class="text-blue-700">View All</button>
            </div>
            <div class="cr__recommendationCars mt-8 grid gap-8 grid-cols-4">
                <AppCarCard v-for="popCar in popularCars" :car="popCar" :key="popCar.id" />
            </div>
        </div>
        <div class="cr__recommendationTitle flex justify-between mx-6 mt-10">
            <h4 class="text-gray-500">Recommendation Car</h4>
        </div>
        <div class="cr__recommendationCars mt-8 grid gap-8 grid-cols-4">
            <AppCarCard v-for="recomCar in recomCars" :car="recomCar" />
        </div>
        <div class="cr__showMore flex justify-center mt-16 relative">
            <button class="text-white bg-blue-700 py-3 px-5 rounded-md">Show more car</button>
            <p class="absolute right-0 top-3 text-gray-500">{{ carStore.totalCars }} Cars</p>
        </div>
    </div>
</template>