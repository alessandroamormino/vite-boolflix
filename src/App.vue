<script>
import { store } from "./store.js";
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
export default {
  data() {
    return {
      store,
    };
  },
  created() {
    axios.get("https://api.themoviedb.org/3/search/movie?api_key=5f71b0abc619b6dae214e6e6f5ef32f7&query=titanic").then((res) => {
      console.log(res);
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
  }
}
</script>

<template>
  <AppHeader @performSearch="searchMovie()"></AppHeader>
</template>

<style lang="scss" scoped></style>
