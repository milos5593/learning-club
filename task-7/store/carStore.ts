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

interface State {
    cars: ICar[]
}

export const useCarStore = defineStore({
    id: 'carStore',
    state: (): State => ({
        cars: [],
    }),
    getters: {
        getAllCars: async (state) => {
            return state.cars
        },
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
        searchCars(searchBy: string) {
            // this.cars.filter()
            console.log(searchBy);
        }
    }
})