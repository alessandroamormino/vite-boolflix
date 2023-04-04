<script>
import { store } from "./store.js";
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppError from "./components/AppError.vue";
let requestAPI;
export default {
  data() {
    return {
      store,
    };
  },
  // All'avvio dell'app mostro i film trending della settimana
  created() {
    this.store.path = '/trending/movie/week';
    requestAPI = `${this.store.stringAPI}${this.store.path}${this.store.key}&language=it-IT&append_to_response=images&include_image_language=it`;
    // Richiamo funzione che fa la chiamata axios dell'API
    this.callAPI(requestAPI);
  },
  methods: {
    // Funzione che fa la chiamata axios dell'API
    callAPI(string) {
      axios.get(string).then((res) => {
        if (this.store.contentSearch == '' || this.store.contentSearch == 'movies') {
          if (res.data.results.length == 0) {
            this.store.movies = [];
            this.store.hasResult = false;
          } else {
            this.store.movies = res.data.results;
            this.store.hasResult = true;
          }
        } else {
          if (res.data.results.length == 0) {
            this.store.series = [];
            this.store.hasResult = false;
          } else {
            this.store.series = res.data.results;
            this.store.hasResult = true;
          }
        }
      }).catch((error) => {
        alert(`Error: ${error.response.status}`);
      });
    },
    // funzione per determinare se ricercare per serie tv o movie 
    readContentSearch() {
      this.store.searchResult = this.store.searchText;
      this.store.contentSearch == 'movies' ? this.searchMovie() : this.store.contentSearch == 'shows' ? this.searchShows() : this.searchMovie();
    },
    // Funzione per ricercare i film
    searchMovie() {
      // Valorizzo la path con il percorso per i movies
      this.store.path = '/search/movie';
      // valorizzo i parametri da passare
      this.store.parameters = `&language=it-IT&append_to_response=images&include_image_language=it&query=${encodeURIComponent(this.store.searchText)}`
      if (this.store.searchText != '') {
        requestAPI = `${this.store.stringAPI}${this.store.path}${this.store.key}${this.store.parameters}`;
        this.callAPI(requestAPI);
        console.log(requestAPI);
      } else {
        // se lancio una ricerca a vuoto mi restituisce i film trending della settimana
        this.store.path = '/trending/movie/week';
        requestAPI = `${this.store.stringAPI}${this.store.path}${this.store.key}`;
        this.callAPI(requestAPI);
      }
    },
    // Funzione per ricercare i film
    searchShows() {
      // Valorizzo la path con il percorso per i movies
      this.store.path = '/search/tv';
      // valorizzo i parametri da passare
      this.store.parameters = `&language=it-IT&append_to_response=images&include_image_language=it&query=${encodeURIComponent(this.store.searchText)}`
      if (this.store.searchText != '') {
        requestAPI = `${this.store.stringAPI}${this.store.path}${this.store.key}${this.store.parameters}`;
        this.callAPI(requestAPI);
      } else {
        // se lancio una ricerca a vuoto mi restituisce le serie tv trending della settimana
        this.store.path = '/trending/tv/week';
        requestAPI = `${this.store.stringAPI}${this.store.path}${this.store.key}&language=it-IT&append_to_response=images&include_image_language=it`;
        this.callAPI(requestAPI);
      }
    },
  },
  components: {
    AppHeader,
    AppMain,
    AppError,
  }
}
</script>

<template>
  <AppHeader @performSearch="readContentSearch()" @showsTrending="searchShows()"></AppHeader>
  <AppError v-if="this.store.hasResult == false"></AppError>
  <AppMain v-if="this.store.hasResult"></AppMain>
</template>

<style lang="scss" scoped></style>
