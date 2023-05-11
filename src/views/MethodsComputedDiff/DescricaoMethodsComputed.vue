<template>
  <div class="fonte">
    <div><strong>Methods: </strong>não sabem se os valores usados na função mudaram, então eles precisam ser executados toda vez para verificar.</div>
    <div><strong>Computed properties: </strong>sabem se os valores usados na função mudaram, então não precisam ser executadas toda vez para verificar, apenas uma vez!</div>
  </div>
  <br/>
  <div>
    <h2>Quando usar METHODS:</h2>
    <ul>
      <li>Para chamar uma função quando um evento acontece no DOM</li>
      <li>Para chamar uma função dos computados ou observadores quando algo acontece em seu componente.</li>
      <li>Precisar passar parâmetros</li>
    </ul>
    <h2>Quando usar COMPUTED PROPERTIES:</h2>
    <ul>
      <li>Precisar compor novos dados de fontes de dados existentes</li>
      <li>Precisar referenciar um valor diretamente em seu template</li>
      <li>Você chama a mesma função mais de uma vez em seu template</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DescricaoMethodsComputed'
})
</script>

<style scoped>
.fonte {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #3c77bb;
}
ul {
  list-style-type: disc;
}
</style>
