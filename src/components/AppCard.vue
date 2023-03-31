<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { store } from "../store.js";
let lang;
export default {
  name: 'AppCard',
  data() {
    return {
      language: '',
      store,
    }
  },
  props: {
    movies: Object,
    series: Object,
  },
  created() {
    this.flag();
  },
  methods: {
    // funzione che gestisce alcune eccezioni sulla ISO week per le flag
    flag() {
      if (this.store.contentSearch == '' || this.store.contentSearch == 'movies') {
        lang = this.movies.original_language;
      } else {
        lang = this.series.original_language;
      }

      if (lang == 'en') {
        lang = 'fi-us';
      } else if (lang == 'ja') {
        lang = 'fi-jp';
      } else if (lang == 'ko') {
        lang = 'fi-kr';
      } else if (lang == 'uk') {
        lang = 'fi-gb';
      } else if (lang == 'zh') {
        lang = 'fi-cn';
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
  <div v-if="this.store.contentSearch == '' || this.store.contentSearch == 'movies' ? true : false" class="card">
    <img :src="this.store.baseURL + 'w342' + movies.poster_path" :alt="movies.title">
    <ul>
      <li>Titolo: {{ movies.title }}</li>
      <li v-if="movies.title != movies.original_title">
        Titolo Originale: {{ movies.original_title }}
      </li>
      <li>
        Lingua: <span class='fi' :class="this.language"></span>
      </li>
      <li>Voto: {{ movies.vote_average }}</li>
    </ul>
  </div>
  <div v-else class="card">
    <img :src="this.store.baseURL + 'w342' + series.poster_path" :alt="series.name">
    <ul>
      <li>Titolo: {{ series.name }}</li>
      <li v-if="series.name != series.original_name">
        Titolo Originale: {{ series.original_name }}
      </li>
      <li>
        Lingua: <span class='fi' :class="this.language"></span>
      </li>
      <li>Voto: {{ series.vote_average }}</li>
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