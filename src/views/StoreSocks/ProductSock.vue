<template>
  <link rel="stylesheet" href="./assets/styles.css" />

  <div class="nav-bar"></div>

  <div class="cart">Cart({{ cart.length }})</div>
  <ProductDisplay
    :premium="premium"
    @add-to-cart="updateCart" 
    @remove-from-cart="removeCartById">
  </ProductDisplay>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductDisplay from '@/components/StoreSocks/ProductDisplay.vue';

export default defineComponent({
  name: 'ProductSock',
  components: {
    ProductDisplay
  },
  data() {
    return {
      cart: [],
      premium: false
    }
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    },
    removeCartById(id) {
      if (this.cart.length >= 1) {
        const index = this.cart.indexOf(id)
        this.cart.splice(index, 1)
      }
    }
  }
});
</script>

<style scoped>
.display {
  color: var(--texto-primario);
}
.nav-bar {
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  height: 60px;
  margin-bottom: 25px;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);
}
.cart {
  margin: 25px 100px;
  float: right;
  border: 1px solid #d8d8d8;
  padding: 10px 30px;
  background-color: white;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}
</style>