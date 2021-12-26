<template>
   <n-input v-model:value="searchFilter" round placeholder="Search...">
       <template #suffix>
          <n-icon>
            <search />
          </n-icon>
       </template>
   </n-input>
  <br />
  <br />
    <n-grid :x-gap="22" :y-gap="20" cols="1 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen" >
      <n-grid-item v-for="fish in getSpecies" :key="fish.id"  >
            <FishItem :fish="fish" @click="showFishDetails(fish.id)"/>
      </n-grid-item>
    </n-grid>
</template>

<script>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import { defineAsyncComponent } from '@vue/runtime-core'
import useFish from '../composables/useFish'
import {Search } from '@vicons/ionicons5'

export default {
    components:{
      FishItem: defineAsyncComponent( () => import('../components/FishItem.vue')),
      Search,
    },
    setup(){

        const router = useRouter()
        
        const { getAllFihses, getSpecies, searchFilter } = useFish()

        getAllFihses()

        const showFishDetails = ( fishId ) => {
          router.push({ name: 'fish-info', params: { id: fishId }})
        }

        watch(searchFilter, ( value ) => {

          () => getSpecies(value)

        })

        return {
            getSpecies,
            searchFilter,
            showFishDetails
        }
    }
}
</script>

<style lang="less" scoped>
.n-grid {
  width: 80%;
}

.n-grid-item{
  align-items: stretch;
  height: 100%;
}
</style>