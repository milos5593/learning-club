<script setup lang="ts">
import { useCarStore } from '~/store/carStore'
const cars = useCarStore()
await cars.fetchCars()
const likedCars = await cars.getLikedCars

</script>

<template>
    <div class="mainDiv container mx-auto bg-gray-100 pt-8 pb-16">
        <AppReservation />
        <div class="cr__likedCars mt-8 grid gap-8 grid-cols-4">
            <AppCar v-for="likedCar in likedCars" :id="likedCar.id" :brand="likedCar.brand" :model="likedCar.model"
                :typeCar="likedCar.typeCar" :capacity="likedCar.capacity" :steering="likedCar.steering"
                :gasoline="likedCar.gasoline" :pricePerDay="likedCar.pricePerDay" :oldPricePerDay="likedCar.oldPricePerDay"
                :description="likedCar.description" :image="likedCar.image" :isAvailable="likedCar.isAvailable"
                :review="likedCar.review" :liked="likedCar.liked" :numberOfRentalDays="likedCar.numberOfRentalDays" />
        </div>
    </div>
</template>