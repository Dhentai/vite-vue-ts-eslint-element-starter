<template>
  <section class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition appear :name="route.meta.transition || 'fade'" mode="out-in">
        <keep-alive>
          <component
            :is="Component"
            :key="route.meta.usePathKey ? route.path : undefined"
          />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
  name: 'AppMain',
  setup() {
    const route = useRoute();
    const key = computed(() => route.path);
    return { key };
  },
});
</script>

<style scoped>
.app-main {
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden;
}
</style>
