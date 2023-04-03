import { reactive } from 'vue';
export const store = reactive({
  // prendo testo da input in AppHeader
  searchText: '',
  // dichiaro percorso iniziale API
  stringAPI: 'https://api.themoviedb.org/3',
  // Dichiaro vuota la path che popolerò al richiamo delle funzioni in App
  path: '',
  // Dichiaro la API KEY
  key: '?api_key=5f71b0abc619b6dae214e6e6f5ef32f7',
  // Dichiaro la variabile per i parametri da mandare alla chiamata API
  parameters: '',
  // Dichiaro array per i movies che popolerò dalla chiamata API
  movies: [],
  // Dichiaro array per le tv shows che popolerò dalla chiamata API
  series: [],
  // Booleana per gestire se la mia ricerca stampa risultati
  hasResult: true,
  // Valorizzo una variabile per determinare se fare la ricerca su film o serie tv
  contentSearch: '',
  // Dichiaro l'URL base per le immagini
  baseURL: 'https://image.tmdb.org/t/p/',
  // Indice della card cliccata
  cardIndex: null,
  isCardOpen: false,
  // Generi film
  genreMovieList: [],
})