<template>
    <div class="cr__ads flex gap-10 text-white mb-10">
        <div class="cr__ad w-1/2 bg-blue-400 p-10 rounded-lg">
            <div class="cr__adText w-1/2">
                <h2 class="text-3xl leading-normal">The Best Platform for Car Rental</h2>
                <h4 class="my-5">Ease of doing a car rental safely and reliably. Of course at a low price.</h4>
            </div>
            <NuxtLink to="/cars" class="px-5 py-3 rounded-md bg-blue-700">Rental Car</NuxtLink>
            <img src="@/assets/images/ads/ad-1.png" alt="ad-1" class="m-auto">
        </div>
        <div class="cr__ad w-1/2 bg-blue-700 p-10 rounded-lg">
            <div class="cr__adText w-1/2">
                <h2 class="text-3xl leading-normal">Easy way to rent a car at a low price</h2>
                <h4 class="my-5">Providing cheap car rental services and safe and comfortable facilities.</h4>
            </div>
            <NuxtLink to="/cars" class="px-5 py-3 rounded-md bg-blue-400">Rental Car</NuxtLink>
            <img src="@/assets/images/ads/ad-2.png" alt="ad-2" class="m-auto">
        </div>
    </div>
</template>