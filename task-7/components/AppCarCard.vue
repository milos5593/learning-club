<script lang="ts" setup>
import { useCarStore } from '~/store/carStore'
import { HeartIcon } from '@heroicons/vue/24/outline'
const carStore = useCarStore()

// interface Props {
//     id: number
//     brand: string
//     model: string
//     typeCar: string
//     capacity: number
//     steering: string
//     gasoline: number
//     pricePerDay: number
//     description: string
//     image: string
//     isAvailable: boolean
//     liked: boolean
//     reviews: Array<IReview>
// }

// interface IReview {
//     name: string,
//     position: string,
//     description: string,
//     date: Date,
//     rate: number
// }

const props = defineProps(['car'])
</script>

<template>
    <div class="cr__carCard flex flex-col p-8 bg-white rounded-lg">
        <div class="flex justify-between">
            <div class="">
                <h3 class="font-bold text-xl">{{ car.brand }} {{ car.model }}</h3>
                <h5 class="font-bold text-sm text-gray-500">{{ car.typeCar }}</h5>
            </div>
            <HeartIcon v-if="car.liked" class="w-6 fill-red-500 text-red-500" @click="carStore.likeCar(car.id)" />
            <HeartIcon v-else="car.liked" class="w-6 text-gray-500" @click="carStore.likeCar(car.id)" />
        </div>
        <div class="">
            <img :src="(`/images/cars/${car.image}.png`)" class="my-14 mx-auto" />
        </div>
        <div class="flex justify-between">
            <div class="flex items-center">
                <SVGGasStation />&nbsp;
                <span class="text-gray-500">{{ car.gasoline }}&nbsp;L</span>
            </div>
            <div class="flex items-center">
                <SVGCar />&nbsp;
                <span class="text-gray-500">{{ car.steering }}</span>
            </div>
            <div class="flex items-center">
                <SVGPeople />&nbsp;
                <span class="text-gray-500">{{ car.capacity }}&nbsp;People</span>
            </div>
        </div>
        <div class="flex mt-6">
            <div v-if="car.oldPricePerDay" class="flex flex-1 flex-col">
                <p class="flex-1 font-bold text-xl w-full">${{ car.pricePerDay }}.00 /
                    <span class="text-base font-normal text-gray-500">day</span>
                </p>
                <p class="text-base font-normal text-gray-500 line-through">${{ car.oldPricePerDay }}.00</p>
            </div>
            <div v-else class="flex flex-1 items-center">
                <p v-if="car.pricePerDay" class="flex-1 font-bold text-xl w-full">${{ car.pricePerDay }}.00 /
                    <span class="text-base font-normal text-gray-500">day</span>
                </p>
            </div>
            <div class="flex flex-1 w-full">
                <NuxtLink :to="`/car/${car.id}`" class="text-white text-center bg-blue-700 py-3 w-full rounded-md">
                    Rent Now
                </NuxtLink>
            </div>
        </div>
    </div>
</template>