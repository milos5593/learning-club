import { defineStore } from 'pinia'

export interface ICar {
    id: number
    brand: string
    model: string
    typeCar: string
    capacity: number
    steering: string
    gasoline: number
    pricePerDay: number
    discount: number
    description: string
    image: string
    isAvailable: boolean
    liked: boolean
    reviews: Array<IReview>
}

interface IReview {
    name: string,
    position: string,
    description: string,
    date: string,
    rate: number
}

interface IFilters {
    typeCar: string[]
    capacity: number[]
    minPrice: number
    maxPrice: number
}

interface State {
    cars: ICar[]
    filters: IFilters
    searchInput: string
    filteredCars: ICar[]
}

export const useCarStore = defineStore({
    id: 'carStore',
    state: (): State => ({
        cars: [],
        filters: {
            typeCar: [],
            capacity: [],
            minPrice: 0,
            maxPrice: 100
        },
        searchInput: '',
        filteredCars: []
    }),
    getters: {
        getAllCars: async (state) => {
            return state.cars
        },
        // CARS
        getPopularCars: async (state) => {
            return state.cars.sort((a, b) => b.reviews.length - a.reviews.length).slice(0, 4)
        },
        getRecomCars: async (state) => {
            return state.cars.slice(0, 8)
        },
        getLikedCars: (state) => {
            return state.cars.filter(c => c.liked)
        },
        getMinPrice: async (state) => {
            const prices = state.cars.map(c => c.pricePerDay)
            return Math.min(...prices)
        },
        getMaxPrice: async (state) => {
            const prices = state.cars.map(c => c.pricePerDay)
            return Math.max(...prices)
        },
        getCarTypes: async (state) => {
            return [...new Set(state.cars.map(car => car.typeCar))];
        },
        getCapacity: async (state) => {
            return [...new Set(state.cars.map(car => car.capacity))];
        },
        totalCars: (state) => {
            return state.cars.length
        },

        // Filtered cars
        getFilteredCars: (state) => {
            state.filteredCars = state.cars
            return state.filteredCars
        },
    },
    actions: {
        async fetchCars() {
            const { data, error } = await useFetch<ICar[]>('/api/cars', {
                lazy: true
            });

            if (error.value) {
                console.error(error.value);
            }

            if (data.value) {
                this.cars = data.value
            }
        },
        likeCar(id: number) {
            const clickedCar = this.cars.find((c) => c.id === id) as ICar;
            clickedCar.liked = !clickedCar.liked;
        },
        searchCars(search: string) {
            this.searchInput = search.toLowerCase()
            this.filterCars(this.filters)
        },
        filterCars(filters: IFilters) {
            const { typeCar, capacity, minPrice, maxPrice } = filters;
            this.filters = filters
            this.filteredCars = this.cars

            if (this.searchInput.length) {
                this.filteredCars = this.filteredCars.filter(car => car.brand.toLowerCase().includes(this.searchInput.toLowerCase()));
            }

            if (typeCar.length) {
                this.filteredCars = this.filteredCars.filter((car) => Array.from(typeCar).includes(car.typeCar));
            }

            if (capacity.length) {
                this.filteredCars = this.filteredCars.filter((car) => Array.from(capacity.toString()).includes(car.capacity.toString()));
            }

            if (minPrice) {
                this.filteredCars = this.filteredCars.filter((car) => car.pricePerDay >= minPrice)
            }

            if (maxPrice) {
                this.filteredCars = this.filteredCars.filter((car) => car.pricePerDay <= maxPrice)
            }
        }
    }
})