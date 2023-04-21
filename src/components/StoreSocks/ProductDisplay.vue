<template>
<div class="product-display">
  <div class="product-container">
    <div class="product-image">
      <img v-bind:class="{ 'out-of-stock-img': !inStock }"
        v-bind:src="image"
        :alt="description">
    </div>
    <div class="product-info">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>

      <a :href="url">Made by Vue Mastery</a>

      <p v-if="inStock > 10">In Stock</p>
      <p v-else-if="inStock > 0 && inStock <= 10">Almost Sold Out</p>
      <p v-else>Out of Stock</p>

      <p>Shipping: {{ shipping }}</p>
      <p>{{ sale }}</p>
      <product-details :details="details"></product-details>

      <p>Sizes: {{ sizes.join(', ') }}</p>

      <div style="padding-top: 15px; padding-bottom: 15px;">
        <div v-for="(variant, index) in variants"
          :key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }">
        </div>
      </div>
      
      <div class="columns">
        <div class="column is-four-quarter" style="text-align: right;">
          <button class="button is-medium is-info is-dark" 
            @click="addToCart" 
            :class="{ disabledButton: !inStock }" 
            :disabled="!inStock">
            Add to Cart
          </button>
        </div>
        <div class="column is-one-quarter">
          <button class="button is-medium is-danger is-light" 
            @click="removeFromCart" 
            :class="{ disabledButton: !inStock }" 
            :disabled="!inStock">
            Remove Item
          </button>
        </div>
      </div>
    </div>
  </div>
  <review-list v-if="reviews.length" :reviews="reviews"></review-list>
  <review-form @review-submitted="addReview"></review-form>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductDisplay',
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      description: 'Comfortable e unisex.',
      selectedVariant: 0,
      url: 'https://www.vuemastery.com/',
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: require('./../../assets/images/socks_green.jpg'), quantity: 8 },
        { id: 2235, color: 'blue', image: require('./../../assets/images/socks_blue.jpg'), quantity: 0 }
      ],
      sizes: ['S', 'M', 'L', 'XL'],
      reviews: []
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
    updateVariant(index) {
      this.selectedVariant = index
      console.log(index)
    },
    addReview(review) {
      this.reviews.push(review)
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    sale() {
      if (this.onSale) {
        return this.title + ' is on sale.'
      }
      return ''
    },
    shipping() {
      if (this.premium) {
        return 'Free'
      }
      return 2.99
    }
  },
});
</script>

<style scoped>
.display {
  color: var(--texto-primario);
}

body {
  background-color: #f2f2f2;
  margin: 0px;
  font-family: tahoma;
  color: #282828;
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

.color-circle {
  width: 50px;
  height: 50px;
  margin-top: 8px;
  border: 2px solid #d8d8d8;
  border-radius: 50%;
}


.disabledButton {
  background-color: #d8d8d8;
  cursor: not-allowed;
}

h1 {
  font-size: 50px;
}

h3 {
  font-size: 25px;
}

img {
  border: 2px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  padding: 15px;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

input {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
}

label {
  font-size: 20px;
  margin-bottom: 5px;
}

li {
  font-size: 18px;
}

.out-of-stock-img {
  opacity: 0.5;
}

p {
  font-size: 22px;
}

.product-display {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.product-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.product-image {
  width: 320px;
  height: 320px;
}
.product-info {
  width: 40%;
}

.review-form {
  display: flex;
  flex-direction: column;
  width: 425px;
  padding: 20px;
  margin: 40px;
  border: 2px solid #d8d8d8;
  background-color: white;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

.review-container {
  width: 425px;
  padding: 20px;
  background-color: white;
  -webkit-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 20px -12px rgba(0, 0, 0, 0.57);
  margin-left: 40px;
  border: 2px solid #d8d8d8;
}

.review-container li {
  margin-bottom: 30px;
}

.review-form .button {
  display: block;
  margin: 30px auto;
}

select {
  height: 40px;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
}

textarea {
  width: 95%;
  height: 70px;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
}

@media only screen and (max-width: 600px) {
  .container {
    flex-direction: column;
  }

  .product-image,
  .product-info {
    margin-left: 10px;
    width: 100%;
  }

  .review-form {
    width: 90%;
  }
}
</style>