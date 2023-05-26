<template>
  <div class="field">
    <label class="label" v-if="label">{{ label }}</label>
    <div class="control">
      <input
        class="input is-rounded"
        v-bind="$attrs"
        :value="modelValue"
        :placeholder="label"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value.toUpperCase())"
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  }
})
</script>
