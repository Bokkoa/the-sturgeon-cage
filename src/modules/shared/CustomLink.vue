<template>
  <a v-if="isExternalLink" target="_blank" class="normal-link" :href="link.to">
    {{ link.name }}
  </a>

  <router-link
    v-else
    :to="{ name: link.to, params: { id: link.id } }"
    v-slot="{ isActive }"
  >
    <!-- v-slot="{ href, isActive }" -->
    <!-- {{ link.name }} -->
    <a :class="isActive ? 'is-active' : 'normal-link'">
      {{ link.name }}
    </a>
  </router-link>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },

  setup( props ) {

    return {
      isExternalLink: computed( () => props.link.to.startsWith("http") ),
      route: computed( () => {
        return props.link.id === undefined
          ? { name: props.link.to }
          : { name: props.link.to, params: { id: props.link.id } };
      }),
    };
  },
};
</script>

<style scoped>
.is-active {
  color: #62819F;
}

.normal-link {
  color: #c6c5c5;
}
</style>
