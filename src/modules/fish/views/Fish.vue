<template>
  <n-h1>{{ getFishInfo["Species Name"] }}</n-h1>

  <n-button ghost round color="#406882" @click="backPage">
    <template #icon>
      <n-icon>
        <ArrowIcon />
      </n-icon>
    </template>
    Back
  </n-button>

  <FishImageGallery :gallery="getFishInfo['Image Gallery']" />

  <n-divider>Information</n-divider>

  <n-space vertical size="large">
    <n-grid :cols="12" :x-gap="10" :y-gap="10" item-responsive>
      <n-grid-item span="12 400:12 600:12 800:3 1200:4">
        <div>
          <n-h2>Details</n-h2>

          <n-tag type="info">
            {{ getFishInfo["Scientific Name"] }}
            <template #avatar>
              <n-avatar>
                <n-icon>
                  <fish-icon />
                </n-icon>
              </n-avatar>
            </template>
          </n-tag>

          <n-grid cols="12" :x-gap="12" :y-gap="12" item-responsive>
            <n-grid-item
              class="info-section"
              span="000:12 400:6 600:6 800:6 1200:6 1500:6"
            >
              <n-tag type="info">
                As food
                <template #avatar>
                  <n-avatar>
                    <n-icon>
                      <food-icon />
                    </n-icon>
                  </n-avatar>
                </template>
              </n-tag>
            </n-grid-item>

            <n-grid-item
              class="info-section"
              span="000:12 400:6 600:6 800:6 1200:6 1500:6"
            >
              {{ getFishInfo["Feeds_"] || "Not information found." }}
            </n-grid-item>
          </n-grid>

          <n-grid cols="12" :x-gap="12" :y-gap="12" item-responsive>
            <n-grid-item
              class="info-section"
              span="000:12 400:6 600:6 800:6 1200:6 1500:6"
            >
              <n-tag type="info">
                Biology
                <template #avatar>
                  <n-avatar>
                    <n-icon>
                      <leaf-icon />
                    </n-icon>
                  </n-avatar>
                </template>
              </n-tag>
            </n-grid-item>

            <n-grid-item
              class="info-section"
              span="000:12 400:6 600:6 800:6 1200:6 1500:6"
            >
              <div v-html="getFishInfo['Biology']"></div>
            </n-grid-item>
          </n-grid>
        </div>
      </n-grid-item>

      <n-grid-item span="12 400:12 600:12 800:9 1200:8">
        <n-h2>General</n-h2>
        <div>
          <n-grid cols="12" :x-gap="12" :y-gap="12" item-responsive>

            <n-grid-item span="12 400:12 600:12 800:6 1200:6">
              <n-divider>NOAA Fisheries Region </n-divider>
              <FisheriesRegioMap
                :regionName="getFishInfo['NOAA Fisheries Region']"
              />
            </n-grid-item>

            <n-grid-item span="12 400:12 600:12 800:6 1200:6">
              <n-divider>Nutrimental Information</n-divider>
              <n-table :bordered="false" :single-line="false">
                <tbody>
                  <tr>
                    <th>Calories</th>
                    <td>{{ getFishInfo["Calories"] }}</td>

                  </tr>
                  <tr>
                    <th>Carbohydrates</th>
                    <td>{{ getFishInfo["Carbohydrate"] }}</td>
                  </tr>
                  <tr>
                    <th>Cholesterol</th>
                    <td>{{ getFishInfo["Cholesterol"] }}</td>
                  </tr>
                  <tr>
                    <th>Total Fat</th>
                    <td>{{ getFishInfo["Fat, Total"] }}</td>
                  </tr>
                  <tr>
                    <th>Fiber, Total Dietary</th>
                    <td>{{ getFishInfo["Fiber, Total Dietary"] }}</td>
                  </tr>
                  <tr>
                    <th>Protein</th>
                    <td>{{ getFishInfo["Protein"] }}</td>
                  </tr>
                </tbody>
              </n-table>
            </n-grid-item>
          </n-grid>
        </div>
      </n-grid-item>
    </n-grid>
  </n-space>
</template>

<script>
// import { watch } from 'vue'
import { useRoute, useRouter } from "vue-router";
import {
  ArrowBackOutline as ArrowIcon,
  Fish as FishIcon,
  Leaf as LeafIcon,
  FastFood as FoodIcon,
} from "@vicons/ionicons5";

import useFish from "../composables/useFish";
import FisheriesRegioMap from "../components/FisheriesRegionMap.vue";
import FishImageGallery from "../components/FishImageGallery.vue";

export default {
  components: {
    ArrowIcon,
    FishIcon,
    FoodIcon,
    LeafIcon,
    FisheriesRegioMap,
    FishImageGallery,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const { getFishInfo } = useFish(route.params.id);

    const backPage = () => {
      router.push({ name: "all-fishes" });
    };

    () => getFishInfo(route.params.id);

    return {
      backPage,
      getFishInfo,
    };
  },
};
</script>

<style lang="less" scoped>
.fullwidth {
  width: 100%;
}

.info-section {
  margin-top: 3em !important;
}
</style>