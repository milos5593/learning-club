<script setup lang="ts">
import { useCarStore } from '~/store/carStore'
const cars = useCarStore()
await cars.fetchCars()

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
        <AppAd v-for="ad in ads" :header="ad.header" :text="ad.text" :cta-label="ad.ctaLabel" :cta-link="ad.ctaLink" :image="ad.image"/>
    </div>
        <Reservation />        
        <div class="cr__cars">
            <PopularCars />
            <RecommondationCars />
        </div>
    </div>
</template>
