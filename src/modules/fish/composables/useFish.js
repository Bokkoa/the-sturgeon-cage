

import { useStore } from 'vuex';
import { computed, ref } from 'vue'

const useFish = ( fishId = 0) => {

    const store = useStore()

    const currentFish = ref()
    const isLoading = ref( false )
    const groupByRegion = ref( false )
    const searchFilter = ref('')

    const getAllFihses = async() => {

        isLoading.value = true
        const resp = await store.dispatch('fish/loadFishes')
        isLoading.value = false
        return resp
    }

    return {
        searchFilter,
        currentFish,
        groupByRegion,
        getAllFihses,
        getSpecies: computed( () => store.getters['fish/getSpecies'](searchFilter.value, groupByRegion.value) ),
        getFishInfo:  computed( () => store.getters['fish/getFishInfo'](fishId) )
    }

}


export default useFish