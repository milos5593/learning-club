<script setup lang="ts">
import { useCarStore } from '~/store/carStore'

const cars = useCarStore()
await cars.fetchCars()
const typeFilters = await cars.getCarTypes
const capacityFilters = await cars.getCapacity
</script>

<template>
    <div class="cr__filters p-8">
        <div class="cr__type flex flex-col gap-1 mb-9">
            <h4 class="text-gray-400 text-sm">TYPE</h4>
            <div v-for="tf in typeFilters" class="flex gap-2 text-xl mt-3">
                <input type="checkbox" id="carType" name="carType" class="mr-3" />
                <label for="carType">{{ tf }}</label>
            </div>
        </div>
        <div class="cr__capacity flex flex-col gap-1 mb-9">
            <h4 class="text-gray-400 text-sm">CAPACITY</h4>
            <div v-for="cf in capacityFilters" class="flex gap-2 text-xl mt-3">
                <input type="checkbox" id="carType" name="carType" class="mr-3" />
                <label for="carType">{{ cf }}</label>
            </div>
        </div>
        <div class="cr__price">
            <h4 class="text-gray-400 text-sm">PRICE</h4>
            <div class="priceSlider">
                <input id="default-range" type="range" value="50" class="w-full h-2 bg-blue-500 rounded-lg appearance-none cursor-pointer dark:bg-blue-700">
                <label for="default-range" class="block mb-2">Max. $100.00</label>
            </div>
        </div>
    </div>
</template>