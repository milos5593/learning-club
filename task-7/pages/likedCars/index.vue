<script setup lang="ts">
import { useCarStore } from '~/store/carStore'
const carStore = useCarStore()
await carStore.fetchCars()
const likedCars = await carStore.getLikedCars
</script>

<template>
    <div class="mainDiv container mx-auto bg-gray-100 pt-8 pb-16">
        <AppReservation />
        <div class="cr__likedCars mt-8 grid gap-8 grid-cols-4">
            <AppCarCard v-for="likedCar in likedCars" :car="likedCar" :key="likedCar.id" />
        </div>
    </div>
</template>