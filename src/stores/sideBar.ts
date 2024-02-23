import { ref, } from 'vue'
import { defineStore } from 'pinia'

export const useSideBarStore = defineStore('Sidebar', () => {
  const IsActive = ref(false)
  
    function toggle() {
        IsActive.value = !IsActive.value
    }

  return { IsActive, toggle }
})
