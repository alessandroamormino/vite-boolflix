<script>

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
    },
    getRatings(object) {
      return Math.round(object.vote_average / 2);
    },
  },
  updated() {
    // aggiorno le flag ad ogni aggiornamento del DOM
    this.flag();
  },
  emits: ['seriesClick'],
}
</script>
<template>
  <!-- Movies -->
  <div v-if="(this.store.contentSearch == '' || this.store.contentSearch == 'movies' ? true : false)" class="card">
    <div class="card-img">
      <img v-if="movies.poster_path != null" :src="this.store.baseURL + 'w342' + movies.poster_path" :alt="movies.title">
      <img v-else src="/img/placeholder.svg" alt="Placeholder_Image">
    </div>
    <div class="card-info">
      <span>Titolo: {{ movies.title }}</span>
      <span v-if="movies.title != movies.original_title">({{ movies.original_title }})</span>
      <span>Lingua: <span class='fi' :class="this.language"></span></span>
      <div class="ratings">
        <!-- import fontawesome icon -->
        Voto: <font-awesome-icon v-for="icon in getRatings(movies)" :icon="['fas', 'star']" class="star" />
        <font-awesome-icon v-for="icon in 5 - getRatings(movies)" :icon="['fas', 'star']" class="star-dark" />
      </div>
      <p v-if="movies.overview != ''">Overview: {{ movies.overview }}</p>
    </div>
  </div>
  <!-- Series -->
  <div v-else class="card" @click="$emit('seriesClick')">
    <div class="card-img">
      <img v-if="series.poster_path != null" :src="this.store.baseURL + 'w342' + series.poster_path" :alt="series.name">
      <img v-else src="/img/placeholder.svg" alt="Placeholder_Image">
    </div>
    <div class="card-info">
      <span>Titolo: {{ series.name }}</span>
      <span v-if="series.name != series.original_name">({{ series.original_name }})</span>
      <span>Lingua: <span class='fi' :class="this.language"></span></span>
      <div class="ratings">
        <!-- import fontawesome icon -->
        Voto: <font-awesome-icon v-for="icon in getRatings(series)" :icon="['fas', 'star']" class="star" />
        <font-awesome-icon v-for="icon in 5 - getRatings(series)" :icon="['fas', 'star']" class="star-dark" />
      </div>
      <p v-if="series.overview != ''">Overview: {{ series.overview }}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  position: relative;

  width: 342px;
  height: 500px;

  .card-img {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }

  .card-info {
    position: absolute;
    top: 0;
    left: 0;
    // position
    display: none;
    flex-flow: column nowrap;
    // display
    padding: 1em;
    width: 100%;
    height: 100%;
    background-color: #212121;
    border-radius: 5px;

    & * {
      padding: .5em 0;
    }

    .ratings {
      display: flex;
      align-items: center;

      .star {
        color: yellow;

        &-dark {
          color: grey;
        }
      }
    }

  }

  &:hover .card-info {
    display: flex;
  }
}
</style>