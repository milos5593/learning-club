<script lang="ts" setup>
import { useCarStore } from '~/store/carStore'
const cars = useCarStore()

interface Props {
    id: number
    brand: string,
    model: string,
    typeCar: string,
    capacity: number,
    steering: string,
    gasoline: number,
    pricePerDay: number,
    oldPricePerDay?: number,
    description: string,
    image: string,
    isAvailable: boolean,
    review: number,
    liked: boolean,
    numberOfRentalDays: number
}

const props = defineProps<Props>()
</script>

<template>
    <div class="cr__carCard flex flex-col p-8 bg-white rounded-lg">
        <div class="flex justify-between">
            <div class="">
                <h3 class="font-bold text-xl">{{ props.brand }} {{ props.model }}</h3>
                <h5 class="font-bold text-sm text-gray-500">{{ props.typeCar }}</h5>
            </div>
            <svgo-like v-if="props.liked" filled class="svg" @click="cars.likeCar(props.id)" />
            <svgo-noLike v-else filled class="svg" @click="cars.likeCar(props.id)" />
        </div>
        <div class="">
            <img :src="(`/images/cars/${props.image}.png`)" class="my-14 mx-auto" />
        </div>
        <div class="flex justify-between">
            <div class="flex items-center">
                <svgo-gas-station filled />&nbsp;
                <span class="text-gray-500">{{ props.gasoline }}&nbsp;L</span>
            </div>
            <div class="flex items-center">
                <svgo-car filled />&nbsp;
                <span class="text-gray-500">{{ props.steering }}</span>
            </div>
            <div class="flex items-center">
                <svgo-profile2 filled />&nbsp;
                <span class="text-gray-500">{{ props.capacity }}&nbsp;People</span>
            </div>
        </div>
        <div class="flex mt-6">
            <div v-if="props.oldPricePerDay" class="flex flex-1 flex-col">
                <p class="flex-1 font-bold text-xl w-full">${{ props.pricePerDay }}.00 /
                    <span class="text-base font-normal text-gray-500">day</span>
                </p>
                <p class="text-base font-normal text-gray-500 line-through">${{ props.oldPricePerDay }}.00</p>
            </div>
            <div v-else class="flex flex-1 items-center">
                <p v-if="props.pricePerDay" class="flex-1 font-bold text-xl w-full">${{ props.pricePerDay }}.00 /
                    <span class="text-base font-normal text-gray-500">day</span>
                </p>
            </div>
            <div class="flex flex-1 w-full">
                <NuxtLink :to="`/car/${props.id}`" class="text-white text-center bg-blue-700 py-3 w-full rounded-md">Rent Now</NuxtLink>
            </div>
        </div>
    </div>
</template>