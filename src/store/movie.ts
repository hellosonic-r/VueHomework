import { defineStore } from 'pinia'; // 피니아에서 defineStore 함수 가져와서 사용

export type Movies = Movie[];
export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieDetail {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
// 인수 1 : 현재 Store 이름 지정 / 인수 2 : state, getters 등 ..
export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [] as Movies,
    movieDetail: {} as MovieDetail,
  }),
  getters: {
    filteredMovies(state) {
      return state.movies
        .filter((movie) => Number(movie.Year) > 2010)
        .sort((a, b) => Number(b.Year) - Number(a.Year));
    },
  },
  actions: {
    async fetchMovies(title: string) {
      const res = await fetch(
        `https://omdbapi.com/?apikey=7035c60c&s=${title}`,
      );
      const { Search } = await res.json();
      this.movies = Search;
    },
    async fetchMovieDetail(id: string) {
      const res = await fetch(
        `https://omdbapi.com?apikey=7035c60c&i=${id}&plot=full`,
      );
      this.movieDetail = await res.json();
    },
  },
});
