<script>
import { store } from "./store.js";
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
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
        this.store.movies = res.data.results;
      }).catch((error) => {
        alert(`Error: ${error.response.status}`);
      });
    },
    searchMovie() {
      console.log(this.store.searchText);
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
  }
}
</script>

<template>
  <AppHeader @performSearch="searchMovie()"></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped></style>
