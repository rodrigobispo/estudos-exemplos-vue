<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-2by2" style="max-width:350px;">
        <img :src="user.avatar_url" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media-left">
        <figure class="image is-48x48">
          <img :src="user.avatar_url" alt="Placeholder image">
        </figure>
      </div>
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ user.name }}</p>
          <p class="subtitle is-6">{{ user.bio }}</p>
        </div>
      </div>
      <div class="content">
        <a :href="user.html_url">@{{ user.login }}</a>.
        <a href="#">#vue</a>
        <br>
        <time :datetime="user.created_at">{{ user.created_at }}</time>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import IUser from '../../interfaces/IUser.js';

export default defineComponent({
  name: 'GithubUserProfile',

  data() {
    return {
      user: null as IUser | null
    }
  },

  async created() {
    const response = await axios.get('https://api.github.com/users/rodrigobispo');
    this.user = response.data;
  },
})
</script>