<script setup lang="ts">
import { useMovieStore } from './store/movie';
import MovieList from './components/MovieList.vue';
import MovieSearch from './components/MovieSearch.vue';

const movieStore = useMovieStore();
</script>

<template>
  <div class="app__header">
    <MovieSearch />
  </div>
  <div class="app__container">
    <div class="app__left">
      <ul>
        <MovieList
          v-for="movie in movieStore.movies"
          :key="movie.imdbID"
          :movieTitle="movie.Title"
          :movieYear="movie.Year"
          :movieId="movie.imdbID" />
      </ul>
    </div>
    <div class="app__right">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app__header {
  background-color: lightcyan;
  display: flex;
  justify-content: center;
  height: 2.5rem;
  align-items: center;
}
.app__container {
  display: flex;
  flex-direction: row;
  height: 100vh;
  .app__left {
    background-color: lightgoldenrodyellow;
    flex-grow: 1;
  }
  .app__right {
    background-color: lavender;
    flex-grow: 1;
    flex-shrink: 1;
  }
}
</style>
