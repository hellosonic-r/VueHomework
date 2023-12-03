<script setup lang="ts">
import { defineProps } from 'vue';
import { useMovieStore } from '../store/movie';

export interface movieInfo {
  movieTitle: string;
  movieYear: string;
  movieId: string;
}

const movieDetailStore = useMovieStore();
async function detailCallback(): Promise<void> {
  if (props.movieId) {
    await movieDetailStore.fetchMovieDetail(props.movieId);
    console.log('클릭');
  }
}

const props = defineProps({
  movieTitle: String,
  movieYear: String,
  movieId: String,
});
</script>
<template>
  <li>
    {{ movieTitle }}
    <!-- <button @click="$router.push(`/${props.movieId}`)">Detail</button> -->
    <button
      @click="
        $router.push({
          name: 'MovieInformation',
          params: {
            movieId,
          },
        }),
          detailCallback()
      ">
      Detail
    </button>
  </li>
</template>
