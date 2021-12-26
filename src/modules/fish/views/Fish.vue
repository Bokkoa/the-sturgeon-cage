<template>
    <n-button strong 
              secondary 
              type="tertiary"
              @click="backPage"
              >
            Volver
    </n-button>
    <h1>{{ getFishInfo }}</h1>
</template>

<script>
// import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useFish from '../composables/useFish'
export default {

    setup(){

        const route = useRoute()
        const router = useRouter()
        const { getFishInfo } = useFish( route.params.id )

        const backPage = () => {
            router.push( { name: 'all-fishes' })
        }

        () => getFishInfo( route.params.id )

        return {
            backPage,
            getFishInfo
        }
    }

}
</script>

<style>

</style>