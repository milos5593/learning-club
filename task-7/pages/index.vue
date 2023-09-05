<script setup lang="ts">
import { useCarStore } from '~/store/carStore'
const cars = useCarStore()
await cars.fetchCars()
const allCars = await cars.getAllCars
const popularCars = await cars.getPopularCars
const recomCars = await cars.getRecomCars

const ads = [{
    header: "The Best Platform for Car Rental",
    text: "Ease of doing a car rental safely and reliably. Of course at a low price.",
    ctaLabel: "Rental Car",
    ctaLink: "/cars",
    image: "/images/ads/ad-1.png"
},
{
    header: "Easy way to rent a car at a low price",
    text: "Providing cheap car rental services and safe and comfortable facilities.",
    ctaLabel: "Rental Car",
    ctaLink: "/cars",
    image: "/images/ads/ad-2.png"
}]
</script>

<template>
    <div class="mainDiv container mx-auto bg-gray-100 pt-8 pb-16">
        <div class="cr__ads flex gap-10 text-white mb-10">
            <AppAd v-for="ad in ads" :header="ad.header" :text="ad.text" :cta-label="ad.ctaLabel" :cta-link="ad.ctaLink" :image="ad.image" />
        </div>
        <AppReservation />
        <div class="cr__cars">
            <div class="cr__popularTitle flex justify-between mx-6 mt-10">
                <h4 class="text-gray-500">Popular Car</h4>
                <button class="text-blue-700">View All</button>
            </div>
            <div class="cr__recommendationCars mt-8 grid gap-8 grid-cols-4">
                <AppCarCard v-for="popCar in popularCars" :id="popCar.id" :brand="popCar.brand" :model="popCar.model"
                    :typeCar="popCar.typeCar" :capacity="popCar.capacity" :steering="popCar.steering"
                    :gasoline="popCar.gasoline" :pricePerDay="popCar.pricePerDay" :oldPricePerDay="popCar.oldPricePerDay"
                    :description="popCar.description" :image="popCar.image" :isAvailable="popCar.isAvailable"
                    :review="popCar.review" :liked="popCar.liked" :numberOfRentalDays="popCar.numberOfRentalDays" />
            </div>
        </div>
        <div class="cr__recommendationTitle flex justify-between mx-6 mt-10">
            <h4 class="text-gray-500">Recommendation Car</h4>
        </div>
        <div class="cr__recommendationCars mt-8 grid gap-8 grid-cols-4">
            <AppCarCard v-for="recomCar in recomCars" :id="recomCar.id" :brand="recomCar.brand" :model="recomCar.model"
                :typeCar="recomCar.typeCar" :capacity="recomCar.capacity" :steering="recomCar.steering"
                :gasoline="recomCar.gasoline" :pricePerDay="recomCar.pricePerDay" :oldPricePerDay="recomCar.oldPricePerDay"
                :description="recomCar.description" :image="recomCar.image" :isAvailable="recomCar.isAvailable"
                :review="recomCar.review" :liked="recomCar.liked" :numberOfRentalDays="recomCar.numberOfRentalDays" />
        </div>
        <div class="cr__showMore flex justify-center mt-16 relative">
            <button class="text-white bg-blue-700 py-3 px-5 rounded-md">Show more car</button>
            <p class="absolute right-0 top-3 text-gray-500">{{ allCars.length }} Cars</p>
        </div>
    </div>
</template>