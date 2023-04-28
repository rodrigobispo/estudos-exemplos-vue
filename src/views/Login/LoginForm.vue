<template>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1><string>Login</string></h1>
      </v-card-title>
      <v-card-text class="mt-10">
        <v-form>
          <v-text-field
            label="Usuário"
            prepend-icon="fa fa-light fa-user"
          />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            label="Senha"
            prepend-icon="fa fa-lock"
            :append-icon="showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-btn color="success">Registrar-se</v-btn>
        <v-spacer />
        <v-btn color="info">Login</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginForm',
  components: {
  },
  data: () => {
    return {
      showPassword: false
    }
  },
  methods: {
  }
})
</script>
