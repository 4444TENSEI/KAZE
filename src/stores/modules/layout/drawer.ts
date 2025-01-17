import { defineStore } from 'pinia'

const useDrawerStore = defineStore('drawer', () => {
  const showDrawer = ref(true)
  const showhBurger = ref(false)

  function toggleDrawer() {
    showDrawer.value = !showDrawer.value
    console.log(showDrawer.value)
  }

  function toggleBurger(isMobile: boolean) {
    showhBurger.value = isMobile
  }

  return {
    showDrawer,
    showhBurger,
    toggleBurger,
    toggleDrawer,
  }
})

export default useDrawerStore
