<template>
  <div class="columns">
    <div class="column is-half">
      <div class="control">
        <section class="section">
          <h1 class="title">Create an event</h1>
          <form @submit.prevent="redirectHere">
            <label class="label">Select a category</label>
            <div class="select is-rounded">
              <select v-model="event.category">
                <option
                  v-for="option in categories" 
                  :value="option"
                  :key="option"
                  :selected="option === event.category">
                  {{ option }}
                </option>
              </select>
            </div>
    
            <h2 class="subtitle">Name & describe your event</h2>
    
            <BaseInput
              v-model="event.title"
              label="Title"
              type="text"
            />
    
            <BaseInput 
              v-model="event.description" 
              label="Description" 
              type="text"
            />
    
            <h2 class="subtitle">Where is your event?</h2>
    
            <BaseInput
              v-model="event.location"
              label="Location"
              type="text"
            />
    
            <div class="container">
              <label class="label">Are pets allowed?</label>
              <div class="control">
                <label class="radio">
                  <input type="radio" v-model="event.pets" :value="1" name="pets" />
                  Yes
                </label>
                <label class="radio">
                  <input type="radio" v-model="event.pets" :value="0" name="pets" />
                  No
                </label>
              </div>
            </div>
    
            <div class="container">
              <label class="label">Extras</label>
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" v-model="event.extras.catering" class="checkbox" />
                  Catering
                </label>
              </div>
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" v-model="event.extras.music" class="checkbox" />
                  Live music
                </label>
              </div>
            </div>
            
            <div class="btn">
              <button class="button is-primary" type="submit">Submit</button>
            </div>
          </form>
        </section>
      </div>
    </div>
    <div class="column">
      <pre>{{ event }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseInput from '@/components/SimpleForm/BaseInput.vue';

export default defineComponent({
  name: 'SimpleForm',
  components: {
    BaseInput,
  },
  data() {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
      },
    }
  },
  methods: {
    redirectHere() {
      console.log(JSON.stringify(this.event));
      console.table(this.event);

      this.event.title = '';
      this.event.description = '';
      this.event.location = '';
      this.event.pets = 1;
      this.event.category = '';
      this.event.extras.catering = false;
      this.event.extras.music = false;

      this.$router.push("/simpleForm");
    }
  }
})
</script>

<style scoped>
div.btn {
  text-align: right;
}
</style>