<template>
 <n-config-provider :theme="getDarkThemState">
    <Navbar />

      <!-- FOR FADE IN TRANSITIONS -->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
  </n-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>


<script>
import { defineAsyncComponent, computed } from 'vue';
import { useStore } from 'vuex'

export default {
  name: 'App',
  components: {
    Navbar: defineAsyncComponent( () =>  import('./modules/shared/Navbar.vue') )
  },

  setup(){

      const store = useStore()

      return {
        getDarkThemState: computed(() => store.getters['getDarkThemeState'] ),
      }
  }

}
</script>
