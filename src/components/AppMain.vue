<script>
import { store } from "../store.js";
import AppCard from "./AppCard.vue";
export default {
  name: "AppMain",
  data() {
    return {
      store,
    };
  },
  components: { AppCard }
}
</script>
<template>
  <div id="main-container">
    <h1 v-if="this.store.contentSearch == '' || this.store.contentSearch == 'movies' ? true : false">Movies</h1>
    <h1 v-else>TV Shows</h1>
    <AppCard v-if="this.store.contentSearch == '' || this.store.contentSearch == 'movies' ? true : false"
      v-for="movie in this.store.movies" :movies="movie"></AppCard>
    <AppCard v-else v-for="serie in this.store.series" :series="serie"></AppCard>
  </div>
</template>
<style lang="scss" scoped>
#main-container {
  padding: 2em;
}
</style>