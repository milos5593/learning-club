import { defineStore } from 'pinia'

interface ICar {
    id: number
    brand: string
    model: string
    typeCar: string
    capacity: number
    steering: string
    gasoline: number
    pricePerDay: number
    oldPricePerDay?: number
    description: string
    image: string
    isAvailable: boolean
    review: number
    liked: boolean
    numberOfRentalDays: number
}

interface State {
    cars: ICar[]
}

export const useCarStore = defineStore("carStore", {
    state: (): State => ({
        cars: [],
    }),
    getters: {
        getAllCars: async (state) => {
            return state.cars
        },
        getPopularCars: async (state) => {
            return state.cars.sort((a, b) => b.numberOfRentalDays - a.numberOfRentalDays).slice(0, 4)
        },
        getRecomCars: async (state) => {
            return state.cars.sort((a, b) => b.review - a.review).slice(0, 8)
        },
        getCarTypes: async (state) => {
            return  [...new Set(state.cars.map(car => car.typeCar))];
        },
        getCapacity: async (state) => {
            return  [...new Set(state.cars.map(car => car.capacity))];
        }
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
          }
    }
})