<template>

  <FishGridOptions
  @searchFilterChanged="onSearchChanged"
  @groupByRegionToggled="onRegionToggled" />

  <br />
  <br />
 
    <template v-if="groupByRegion">
       
       <div v-for="[key, region] in getSpecies" :key="key">

        <n-h2 align-texts>{{ key }}</n-h2>
        
        <hr class="divider"/>

         <n-grid
          :x-gap="22"
          :y-gap="20"
          cols="1 s:3 m:4 l:5 xl:6 2xl:7"
          responsive="screen"
        >
            <n-grid-item v-for="fish of region" :key="fish.id" >
              <FishItem  :fish="fish" @click="showFishDetails(fish.id)" />
            </n-grid-item>
        </n-grid>
       </div>
    </template>
    <template v-else>
       <n-grid
          :x-gap="22"
          :y-gap="20"
          cols="1 s:3 m:4 l:5 xl:6 2xl:7"
          responsive="screen"
        >
          <n-grid-item v-for="fish in getSpecies" :key="fish.id">
            <FishItem :fish="fish" @click="showFishDetails(fish.id)" />
          </n-grid-item>
      </n-grid>
    </template>
</template>

<script>
import { watch } from "vue";
import { useRouter } from "vue-router";
import { defineAsyncComponent } from "@vue/runtime-core";
import useFish from "../composables/useFish";

export default {
  
  components: {
    FishItem: defineAsyncComponent(() => import("../components/FishItem.vue")),
    FishGridOptions: defineAsyncComponent(() => import("../components/FishGridOptions.vue")),
  },

  setup() {
    const router = useRouter();

    const { getAllFihses, getSpecies, searchFilter, groupByRegion } = useFish();

    getAllFihses();

    const showFishDetails = (fishId) => {
      router.push({ name: "fish-info", params: { id: fishId } });
    };

    watch([searchFilter, groupByRegion], (searchValue, groupValue) => {
      () => getSpecies(searchValue, groupValue);
    });

    return {
      groupByRegion,
      getSpecies,
      searchFilter,
      showFishDetails,
      onRegionToggled: ( event ) => {
        groupByRegion.value = event
      },
      onSearchChanged: ( event => {
        searchFilter.value = event
      })

    };
  },
};
</script>

<style lang="less" scoped>

.divider {
    overflow: visible; /* For IE */
    height: 30px;
    border-style: solid;
    border-color: black;
    border-width: 1px 0 0 0;
    border-radius: 20px;
}
.divider:before { /* Not really supposed to work, but does */
    display: block;
    content: "";
    height: 30px;
    margin-top: -31px;
    border-style: solid;
    border-color: black;
    border-width: 0 0 1px 0;
    border-radius: 20px;
}

.n-h2{
  color: #6998AB;
  margin-top: 1em;
}

.n-grid {
  width: 80%;
}

.n-grid-item {
  align-items: stretch;
  height: 100%;
}
</style>