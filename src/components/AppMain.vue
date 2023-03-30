<script>
import { store } from "../store.js";
export default {
  name: 'AppMain',
  data() {
    return {
      store,
    }
  }
}
</script>
<template>
  <div id="main-container">
    <h1>Movies_</h1>
    <div class="card" v-for="movie in this.store.movies">
      <ul>
        <li>Titolo: {{ movie.title }}</li>
        <li v-if="movie.title != movie.original_title">
          Titolo Originale: {{ movie.original_title }}
        </li>
        <li>Lingua: {{ movie.original_language }}</li>
        <li>Voto: {{ movie.vote_average }}</li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  border: 1px solid black;
  margin-bottom: 1em;
  // test
}
</style>