<template>
    <n-space>

    <n-input v-model:value="searchFilter" 
             @change="$emit('searchFilterChanged', $event)"
             round placeholder="Search...">
      <template #suffix>
        <n-icon>
          <search />
        </n-icon>
      </template>
    </n-input>

    <n-h6>Group By Region</n-h6>
    <n-switch
      :rail-style="railStyle"
      v-model:value="groupByRegion"
      @update:value="handleChange"
    >
    
    </n-switch>
  </n-space>


</template>

<script>
import { Search } from "@vicons/ionicons5";

import useFish from '../composables/useFish'

export default {
    emits: ['searchFilterChanged', 'groupByRegionToggled'],
    components: {
        Search,
    },

    setup(_, {emit}){

        const { groupByRegion, searchFilter } = useFish()


        return {
            searchFilter,
            groupByRegion,
            handleChange: ( value ) => {
                
                groupByRegion.value = value

                emit('groupByRegionToggled', groupByRegion.value);

            },
             railStyle: ({ focused, checked }) => {
                const style = {};

                if (checked) {
                    style.background = "#406882";
                    if (focused) {
                        style.boxShadow = "0 0 0 2px #40688240";
                    }
                } else {
                    style.background = "#ccc";
                    if (focused) {
                        style.boxShadow = "0 0 0 2px #ccc40";
                    }
                }
                return style;
            },
        }

    }

}
</script>

<style>

</style>