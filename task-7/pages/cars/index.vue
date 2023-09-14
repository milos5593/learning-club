<script lang="ts" setup>
import { useCarStore } from '~/store/carStore'
import { storeToRefs } from 'pinia';
const carStore = useCarStore()
await carStore.fetchCars()
const allCars = await carStore.getAllCars
storeToRefs(useCarStore())
</script>

<template>
    <div class="cr__cars container mx-auto grid grid-cols-5">
        <div class="cr__filters col-span-1">
            <AppFilters />
        </div>
        <div class="cr__reservation col-span-4 p-8">
            <AppReservation />
            <div class="cr__recommendationCars mt-8 grid gap-8 grid-cols-3">
                <AppCarCard v-for="car in carStore" :car="car" />
            </div>
            <div class="cr__showMore flex justify-center mt-16 relative">
                <button class="text-white bg-blue-700 py-3 px-5 rounded-md">Show more car</button>
                <p class="absolute right-0 top-3 text-gray-500">{{ carStore.totalCars }} Cars</p>
            </div>
        </div>
    </div>
</template>