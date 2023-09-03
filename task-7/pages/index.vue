<script setup lang="ts">
import { useCarStore } from '~/store/carStore'
const cars = useCarStore()
await cars.fetchCars()
</script>

<template>
    <div class="mainDiv container mx-auto bg-gray-100 pt-8 pb-16">
        <Ads />
        <Reservation />        
        <div class="cr__cars">
            <PopularCars />
            <RecommondationCars />
        </div>
    </div>
</template>
