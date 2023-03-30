<script>
export default {
  name: 'AppCard',
  data() {
    return {}
  },
  props: {
    movies: Array,
  },
}
</script>
<template>
  <div class="card" v-for="movie in movies">
    <ul>
      <li>Titolo: {{ movie.title }}</li>
      <li v-if="movie.title != movie.original_title">
        Titolo Originale: {{ movie.original_title }}
      </li>
      <li>Lingua: {{ movie.original_language }}</li>
      <li>Voto: {{ movie.vote_average }}</li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.card {
  border: 1px solid black;
  margin-bottom: 1em;
  // test
}
</style>