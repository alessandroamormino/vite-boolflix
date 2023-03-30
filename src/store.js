import { reactive } from 'vue';
export const store = reactive({
  searchText: '',
  stringAPI: 'https://api.themoviedb.org/3',
  movieStringAPI: '/search/movie',
  key: '?api_key=5f71b0abc619b6dae214e6e6f5ef32f7',
  movies: [],
  trendingMovies: '/trending/movie/week',
  hasResult: true,
})