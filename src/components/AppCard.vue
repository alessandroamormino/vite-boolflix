<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default {
  name: 'AppCard',
  data() {
    return {
      language: '',
    }
  },
  props: {
    movies: Object,
  },
  created() {
    this.flag();
  },
  methods: {
    flag() {
      let lang = this.movies.original_language;
      this.language = lang == 'en' ? lang = 'fi-us' : 'fi-' + lang;
    }
  }
}
</script>
<template>
  <div class="card">
    <ul>
      <li>Titolo: {{ movies.title }}</li>
      <li v-if="movies.title != movies.original_title">
        Titolo Originale: {{ movies.original_title }}
      </li>
      <li>
        Lingua: {{ movies.original_language }} <span class='fi' :class="this.language"></span>
      </li>
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