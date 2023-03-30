<script>
export default {
  name: 'AppCard',
  data() {
    return {}
  },
  props: {
    movies: Object,
  },
}
</script>
<template>
  <div class="card">
    <ul>
      <li>Titolo: {{ movies.title }}</li>
      <li v-if="movies.title != movies.original_title">
        Titolo Originale: {{ movies.original_title }}
      </li>
      <li>Lingua: {{ movies.original_language }}</li>
      <li>Voto: {{ movies.vote_average }}</li>
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