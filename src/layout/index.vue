<template>
  <div class="app-wrapper">
    <AppMain></AppMain>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { AppMain } from './components';
export default defineComponent({
  name: 'layout',
  components: {
    AppMain,
  },
});
</script>
