import { defineStore } from 'pinia'

interface Ad {
  id: number,
  header: string,
  text: string,
  ctaLabel: string,
  ctaLink: string,
  image: string
}

interface State {
  ads: Ad[]
}

export const useAdStore = defineStore({
  id: 'adStore',
  state: (): State => ({
    ads: []
  }),
  getters: {

  },
  actions: {
    async fetchAds() {
      const { data, error } = await useFetch<Ad[]>('/api/ads', {
        lazy: true
      });

      if (error.value) {
        console.error(error.value);
      }

      if (data.value) {
        this.ads = data.value
      }
    },
  }
})
