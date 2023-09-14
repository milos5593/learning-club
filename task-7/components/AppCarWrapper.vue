<script lang="ts" setup>
import { useCarStore } from '~/store/carStore'
const carStore = useCarStore()
const carID = useRoute().params.id;

</script>

<template>
    <div class="cr__carWrapper col-span-4 pb-8 grid grid-cols-2 gap-8 w-full">
        <div class="grid grid-flow-row grid-rows-4 gap-8">
            <div class="row-span-3 flex flex-col bg-blue-700 text-white p-6 rounded-xl">
                <h3 class="text-3xl">Sports car with the best design and acceleration</h3>
                <h5 class="mt-4 w-2/3">Safety and comfort while driving a futuristic and elegant sports car</h5>
                <img src="../images/cars/car-1.png" alt="car-1" class="mt-8 w-4/5 m-auto">
            </div>
            <div class="row-span-1 grid grid-cols-3 gap-6">
                <div class="border-2 border-blue-600 bg-blue-700 rounded-lg">
                    <img src="../images/cars/car-1.png" alt="car-1" class="p-2">
                </div>
                <div>
                    <img src="../images/other/carInside.png" alt="car-2" class="rounded-lg">
                </div>
                <div>
                    <img src="../images/other/carInside.png" alt="car-3" class="rounded-lg">
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-between bg-white rounded-xl p-6">
            <div class="flex justify-between">
                <div class="">
                    <h3 class="font-bold text-xl">Nissan GT-R</h3>
                    <h4>zvezdice</h4>
                </div>
                <svgo-like filled class="svg" />
                <!-- @click="cars.likeCar(props.id)" /> -->
            </div>
            <p class="text-gray-700 text-xl leading-10">NISMO has become the embodiment of Nissan's outstanding performance,
                inspired by the most unforgiving proving ground, the "race track".</p>
            <div class="grid grid-cols-2 gap-6 text-xl">
                <div class="flex justify-between">
                    <h5 class="text-gray-500">Type Car</h5>
                    <p class="font-semibold text-gray-700">Sport</p>
                </div>
                <div class="flex justify-between">
                    <h5 class="text-gray-500">Steering</h5>
                    <p class="font-semibold text-gray-700">Manual</p>
                </div>
                <div class="flex justify-between">
                    <h5 class="text-gray-500">Capacity</h5>
                    <p class="font-semibold text-gray-700">2 Person</p>
                </div>
                <div class="flex justify-between">
                    <h5 class="text-gray-500">Gasoline</h5>
                    <p class="font-semibold text-gray-700">70L</p>
                </div>
            </div>
            <div class="flex justify-between">
                <div class="flex flex-col">
                    <p class="flex-1 font-bold text-xl w-full">$80.00 / <span
                            class="text-base font-normal text-gray-500">days</span></p>
                    <p class="text-base font-normal text-gray-500 line-through">$100.00</p>
                </div>
                <button class="text-white text-center font-bold bg-blue-700 py-3 px-6 rounded-md">Rent Now</button>
            </div>
        </div>
    </div>
    <div class="cr__carReview p-8 w-full bg-white rounded-xl">
        <h3 class="mb-8 font-semibold text-lg">Reviews<span
                class="ml-2 px-3 py-1 rounded-md text-white bg-blue-500">13</span></h3>
        <div class="grid gap-6">
            <div class="col-span-1 grid grid-flow-col">
                <div class="pr-4">
                    <img src="/images/other/profil.png" alt="profile image">
                </div>
                <div class="flex flex-col justify-between">
                    <div class="flex justify-between">
                        <div class="flex flex-col">
                            <h5 class="font-bold text-lg mb-2">Alex Stanton</h5>
                            <p class="text-gray-500">CEO at Bukalapak</p>
                        </div>
                        <div class="flex flex-col">
                            <h5 class="text-gray-500">21 July 2022</h5>
                            <p>zvezdice</p>
                        </div>
                    </div>
                    <p class="mt-4 text-gray-500">We are very happy with the service from the MORENT App. Morent has a low
                        price and also a large
                        variety of cars with good and comfortable facilities. In addition, the service provided by the
                        officers is also very friendly and very polite.</p>
                </div>
            </div>
            <div class="col-span-1 grid grid-flow-col">
                <div class="pr-4">
                    <img src="/images/other/profil.png" alt="profile image">
                </div>
                <div class="flex flex-col justify-between">
                    <div class="flex justify-between">
                        <div class="flex flex-col">
                            <h5 class="font-bold text-lg mb-2">Skylar Dias</h5>
                            <p class="text-gray-500">CEO at Amazon</p>
                        </div>
                        <div class="flex flex-col">
                            <h5 class="text-gray-500">20 July 2022</h5>
                            <p>zvezdice</p>
                        </div>
                    </div>
                    <p class="mt-4 text-gray-500">We are greatly helped by the services of the MORENT Application. Morent
                        has low prices and also a wide variety of cars with good and comfortable facilities. In addition,
                        the service provided by the officers is also very friendly and very polite.</p>
                </div>
            </div>
        </div>
    </div>
</template>