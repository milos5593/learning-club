<script setup lang="ts">
import { useCarStore } from '~/store/carStore'

const cars = useCarStore()
const popularCars = await cars.popularCars

</script>

<template>
    <div class="cr__popularTitle flex justify-between mx-6 mt-10">
        <h4 class="text-gray-500">Popular Car</h4>
        <button class="text-blue-700">View All</button>
    </div>
    <div class="cr__recommendationCars mt-8 grid gap-8 grid-cols-4">
        <div v-for="car in popularCars" class="cr__carWrapper flex flex-col p-8 bg-white rounded-lg">
            <div class="flex justify-between">
                <div class="">
                    <h3 class="font-bold text-xl">{{ car.brand }} {{ car.model }}</h3>
                    <h5 class="font-bold text-sm text-gray-500">{{ car.typeCar }}</h5>
                </div>
                <svgo-like v-if="car.liked" filled class="svg" @click="cars.likeCar(car.id)"/>
                <svgo-noLike v-else filled class="svg" @click="cars.likeCar(car.id)"/>
            </div>
            <div class="">
                <img :src="(`/images/cars/${car.image}.png`)" class="my-14 mx-auto" />
            </div>
            <div class="flex justify-between">
                <div class="flex items-center">
                    <svgo-gas-station filled />&nbsp;
                    <span class="text-gray-500">{{ car.gasoline }}&nbsp;L</span>
                </div>
                <div class="flex items-center">
                    <svgo-car filled />&nbsp;
                    <span class="text-gray-500">{{ car.steering }}</span>
                </div>
                <div class="flex items-center">
                    <svgo-profile2 filled />&nbsp;
                    <span class="text-gray-500">{{ car.capacity }}&nbsp;People</span>
                </div>
            </div>
            <div class="flex mt-6">
                <div v-if="car.oldPricePerDay" class="flex flex-1 flex-col">
                    <p class="flex-1 font-bold text-xl w-full">${{ car.pricePerDay }}.00 / 
                        <span class="text-base font-normal text-gray-500">day</span></p>
                    <p class="text-base font-normal text-gray-500 line-through">${{ car.oldPricePerDay }}.00</p>
                </div>
                <div v-else class="flex flex-1 items-center">
                    <p v-if="car.pricePerDay" class="flex-1 font-bold text-xl w-full">${{ car.pricePerDay }}.00 /
                        <span class="text-base font-normal text-gray-500">day</span>
                    </p>
                </div>
                <div class="flex flex-1 w-full">
                    <NuxtLink :to="`/car/${car.id}`" class="text-white text-center bg-blue-700 py-3 w-full rounded-md">Rent Now</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped   >
.svg {
    width: 24px;
    height: 24px;
}
</style>