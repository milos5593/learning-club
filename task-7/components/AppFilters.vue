<script lang="ts" setup>
import { useCarStore } from '~/store/carStore'

const carStore = useCarStore()

// Fetch of filters
const availableCarTypes = await carStore.getCarTypes
const availableCapacity = await carStore.getCapacity
const minPossiblePrice = await carStore.getMinPrice
const maxPossiblePrice = await carStore.getMaxPrice

// Filter elements
const typeFilter = ref([])
const capacityFilter = ref([])
const minPrice = ref(minPossiblePrice.toString())
const maxPrice = ref(maxPossiblePrice.toString())

type IFilters = {
    searchInput: string
    typeCar: string[]
    capacity: number[]
    minPrice: number
    maxPrice: number
}

const filters: IFilters = {
    searchInput: '',
    typeCar: [],
    capacity: [],
    minPrice: 0,
    maxPrice: 100
}

watch(() => [typeFilter.value, capacityFilter.value, minPrice.value, maxPrice.value], async () => {
    filters.typeCar = typeFilter.value
    filters.capacity = capacityFilter.value
    filters.minPrice = Number(minPrice.value)
    filters.maxPrice = Number(maxPrice.value)
    carStore.filterCars(filters)
})
</script>

<template>
    <div class="cr__filters col-span-1">
        <div class="cr__filters p-8 h-full bg-white">
            <div class="cr__type flex flex-col gap-1 mb-9">
                <FormKit v-model="typeFilter" type="checkbox" label="TYPE" :options="availableCarTypes" />
            </div>
            <div class="cr__capacity flex flex-col gap-1 mb-9">
                <FormKit v-model="capacityFilter" type="checkbox" label="CAPACITY" :options="availableCapacity" />
            </div>
            <div class="cr__price">
                <FormKit v-model="minPrice" type="range" :min="minPossiblePrice" :max="maxPrice" label="Minimum price">
                </FormKit>
                <pre wrap>{{ minPrice }}</pre>
                <FormKit v-model="maxPrice" type="range" :min="minPrice" :max="maxPossiblePrice" label="Maximum price">
                </FormKit>
                <pre wrap>{{ maxPrice }}</pre>
            </div>
        </div>
    </div>
</template>