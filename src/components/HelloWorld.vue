<template>
  <div class="container is-max-desktop notification content is-medium center">
    <strong class="display">
      {{ msg }}
    </strong>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped>
.center {
  text-align: center;
}
</style>