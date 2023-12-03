<script setup lang="ts">
import { ref } from 'vue';
import { useMovieStore } from '../store/movie';
const movieStore = useMovieStore();
const title = ref('');

async function searchMovies() {
  await movieStore.fetchMovies(title.value);
  //   console.log(movieStore.movies);
}
function resetMovies() {
  title.value = '';
  movieStore.$reset();
}
</script>

<template>
  <div class="app__header-search-box">
    <input
      v-model="title"
      @keydown.enter="searchMovies" />
    <button @click="searchMovies">Search</button>
    <button @click="resetMovies">Reset</button>
  </div>
</template>
