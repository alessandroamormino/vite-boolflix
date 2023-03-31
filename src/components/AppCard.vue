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
    // funzione che gestisce alcune eccezioni sulla ISO week per le flag
    flag() {
      let lang = this.movies.original_language;

      if (lang == 'en') {
        lang = 'fi-us';
      } else if (lang == 'ja') {
        lang = 'fi-jp';
      } else if (lang == 'ko') {
        lang = 'fi-kr';
      } else {
        lang = 'fi-' + lang;
      }

      this.language = lang;
    }
  },
  updated() {
    // aggiorno le flag ad ogni aggiornamento del DOM
    this.flag();
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