<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Tracker Tasks">
    </h1>
    <button class="button" @click="alterarTema">
      {{ textoBotao }}
    </button>
    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link :to="{ name: 'home' }" class="link">
            <i class="fas fa-house"></i> Home
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'simple-form' }" class="link">
            <i class="fas fa-tasks"></i> Simple Form
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'sock' }" class="link">
            <i class="fas fa-socks"></i> Buy Socks
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'login' }" class="link">
            <i class="fas fa-sign-in"></i> Login
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'methodsComputedDiff' }" class="link">
            <i class="fas fa-comments"></i> Methods & Computed
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'githubUserProfile' }" class="link">
            <i class="fas fa-comments"></i> Github User Profile
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BarraLateral',
  emits: ['aoAlterTema'],
  data() {
    return {
      modoEscuroAtivado: false
    }
  },
  methods: {
    alterarTema() {
      this.modoEscuroAtivado = !this.modoEscuroAtivado
      this.$emit('aoAlterTema', this.modoEscuroAtivado)
    }
  },
  computed: {
    textoBotao(): string {
      return this.modoEscuroAtivado ? 'Modo Claro' : 'Modo Escuro'
    }
  }
})

</script>

<style scoped>
/* Todo o estilo do componente */
header {
  padding: 1rem;
  background: #3e7bb4;
  width: 100%;
  height: 100vh;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}

.panel li {
    margin: 8px 0;
}
.link {
    color: #fff;
}
.link:hover {
    color: #FAF0CA;
}
.link.router-link-active {
    color: #FAF0CA;
}
</style>