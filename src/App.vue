<script>
import { store } from "./store.js";
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
export default {
  data() {
    return {
      store,
    };
  },
  created() {
    let requestAPI = `${this.store.stringAPI}${this.store.trendingMovies}${this.store.key}`;
    axios.get(requestAPI).then((res) => {
      this.store.movies = res.data.results;
    }).catch((error) => {
      alert(`Error: ${error.response.status}`);
    });
  },
  methods: {
    searchMovie() {
      console.log(this.store.searchText);
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
