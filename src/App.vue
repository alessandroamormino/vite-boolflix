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
    requestAPI = `${this.store.stringAPI}${this.store.path}${this.store.key}`;
    // Richiamo funzione che fa la chiamata axios dell'API
    this.callAPI(requestAPI);
  },
  methods: {
    // Funzione che fa la chiamata axios dell'API
    callAPI(string) {
      axios.get(string).then((res) => {
        if (res.data.results.length == 0) {
          this.store.movies = [];
          this.store.hasResult = false;
        } else {
          this.store.movies = res.data.results;
          this.store.hasResult = true;
        }
      }).catch((error) => {
        alert(`Error: ${error.response.status}`);
      });
    },
    // Funzione per ricercare i film
    searchMovie() {
      // Valorizzo la path con il percorso per i movies
      this.store.path = '/search/movie';
      // valorizzo i parametri da passare
      this.store.parameters = `&language=it-IT&query=${encodeURIComponent(this.store.searchText)}`
      if (this.store.searchText != '') {
        requestAPI = `${this.store.stringAPI}${this.store.path}${this.store.key}${this.store.parameters}`;
        this.callAPI(requestAPI);
      } else {
        // se lancio una ricerca a vuoto mi restituisce i film trending della settimana
        this.store.path = '/trending/movie/week';
        requestAPI = `${this.store.stringAPI}${this.store.path}${this.store.key}`;
        this.callAPI(requestAPI);
      }
    }
  },
  components: {
    AppHeader,
    AppMain,
    AppError,
  }
}
</script>

<template>
  <AppHeader @performSearch="searchMovie()"></AppHeader>
  <AppError v-if="this.store.hasResult == false"></AppError>
  <AppMain v-if="this.store.hasResult"></AppMain>
</template>

<style lang="scss" scoped></style>
