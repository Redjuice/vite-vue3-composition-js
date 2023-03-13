import { defineStore } from 'pinia'

export const useCountStore = defineStore({
  id: 'count', // id必填，且需要唯一
  state: () => {
    return {
      count: 0
    }
  },
  actions: {
    updateCount(count) {
      this.count += count
    }
  }
})
