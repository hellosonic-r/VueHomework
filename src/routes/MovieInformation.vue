<template>
  <!-- <h1>{{ $route.params.movieId }}</h1> -->
  <h2>
    {{ movieStore.movieDetail.Title }} | {{ movieStore.movieDetail.Year }}
  </h2>
  <div class="movie-information">
    <p>평점 : {{ movieStore.movieDetail.Ratings[0].Value }}</p>
    <p>장르 : {{ movieStore.movieDetail.Genre }}</p>
    <p>감독 : {{ movieStore.movieDetail.Director }}</p>
    <p>런타임 : {{ movieStore.movieDetail.Runtime }}</p>
    <p>개봉일 : {{ movieStore.movieDetail.Released }}</p>
  </div>

  <img
    :src="movieStore.movieDetail.Poster"
    alt="Poster" />
</template>

<script setup lang="ts">
import { useMovieStore } from '../store/movie';
const movieStore = useMovieStore();
console.log(movieStore.movieDetail);
</script>
