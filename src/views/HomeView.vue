<template>
  <section>
    <div>
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>

<style>
.display {
    color: var(--texto-primario);
}
</style>