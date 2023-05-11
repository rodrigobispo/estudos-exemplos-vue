<template>
<div class="tela">
  <p><strong>Pressione F12 para verificação das saídas do Console</strong></p>
  <button @click="counterComputed++" class="button">Computed</button>
  <p>{{ counterComputed }}</p>
  <br/>
  <button @click="counterMethod++" class="button">Method</button>
  <p>{{ counterMethod }}</p>

  <div>Counter Methods: {{ printTextMethod() }}</div>
  <div>Counter Computed: {{ printTextComputed }}</div>
  <br/>
  <DescricaoMethodsComputed/>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DescricaoMethodsComputed from './DescricaoMethodsComputed.vue';

export default defineComponent({
    name: "MethodsComputedDiff",
    data: function () {
        return {
            counterComputed: 0,
            counterMethod: 0
        };
    },
    computed: {
        printTextComputed(): number {
            console.log("counter printed from computed:", this.counterComputed);
            return this.counterComputed;
        }
    },
    methods: {
        printTextMethod() {
            console.log("counter printed from method:", this.counterMethod);
            return this.counterMethod;
        }
    },
    components: { DescricaoMethodsComputed }
})
</script>

<style scoped>
.tela {
  padding-left: 50px;
  padding-top: 20px;
}

</style>