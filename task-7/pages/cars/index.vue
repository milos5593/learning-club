<script lang="ts" setup>
import { useCarStore } from '~/store/carStore'
import { storeToRefs } from 'pinia';

const carStore = useCarStore()
const { filteredCars } = storeToRefs(carStore)
await carStore.fetchCars()
carStore.getFilteredCars
</script>

<template>
    <div class="cr__cars container mx-auto grid grid-cols-5">
        <AppFilters />
        <div class="col-span-4 p-8">
            <AppReservation />
            <div class="cr__recommendationCars mt-8 grid gap-8 grid-cols-3">
                <AppCarCard v-for="car in filteredCars" :car="car" />
            </div>
            <AppShowMore :length="filteredCars.length" />
        </div>
    </div>
</template>