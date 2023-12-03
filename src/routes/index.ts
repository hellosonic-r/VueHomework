import { createRouter, createWebHistory } from 'vue-router';
import MovieInformation from './MovieInformation.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MovieInformation,
      children: [
        {
          name: 'MovieInformation',
          path: '/:movieId',
          component: MovieInformation,
        },
      ],
    },
  ],
});
