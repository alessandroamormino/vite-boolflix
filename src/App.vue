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
  created() {
    requestAPI = `${this.store.stringAPI}${this.store.trendingMovies}${this.store.key}`;
    this.callAPI(requestAPI);
  },
  methods: {
    callAPI(string) {
      axios.get(string).then((res) => {
        if (res.data.results.length == 0) {
          this.store.movies = [];
          this.store.hasResult = false;
        } else {
          this.store.movies = res.data.results;
          this.store.hasResult = true;
          console.log(string);
        }
      }).catch((error) => {
        alert(`Error: ${error.response.status}`);
      });
    },
    searchMovie() {
      if (this.store.searchText != '') {
        requestAPI = `${this.store.stringAPI}${this.store.movieStringAPI}${this.store.key}&language=it&query=${this.store.searchText}`;
        this.callAPI(requestAPI);
      } else {
        requestAPI = `${this.store.stringAPI}${this.store.trendingMovies}${this.store.key}`;
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
