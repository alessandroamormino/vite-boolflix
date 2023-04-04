<script>
import { store } from "../store.js";
import axios from "axios";
export default {
  name: 'CardDetails',
  data() {
    return {
      store,
    }
  },
  methods: {
    closeDetail() {
      this.store.isCardOpen = false;
    },
    genreAPI() {
      // valorizzo stringa da passare alla chiamata axios
      if (this.store.contentSearch == '' || this.store.contentSearch == 'movies') {
        this.store.path = '/movie/';
        let movieId = this.store.movies[this.store.cardIndex].id;
        let genreString = `${this.store.stringAPI}${this.store.path}${movieId}${this.store.key}&language=it-IT`;
        axios.get(genreString).then((response) => {
          this.store.genreMovieList = response.data.genres;
        });
      } else {
        this.store.path = '/tv/';
        let serieId = this.store.series[this.store.cardIndex].id;
        let genreString = `${this.store.stringAPI}${this.store.path}${serieId}${this.store.key}&language=it-IT`;
        axios.get(genreString).then((response) => {
          this.store.genreSerieList = response.data.genres;
          console.log(this.store.genreSerieList);
        });
      }
    },
    castAPI() {
      // valorizzo stringa da passare alla chiamata axios
      if (this.store.contentSearch == '' || this.store.contentSearch == 'movies') {
        this.store.path = '/movie/';
        let movieId = this.store.movies[this.store.cardIndex].id;
        let genreString = `${this.store.stringAPI}${this.store.path}${movieId}/credits${this.store.key}&language=it-IT`;
        axios.get(genreString).then((response) => {
          this.store.castMovieList = response.data.cast;
          // Prendo soltanto i primi 5 attori del cast
          this.store.castMovieList.splice(5, this.store.castMovieList.length - 1);
        });
      } else {
        this.store.path = '/tv/';
        let serieId = this.store.series[this.store.cardIndex].id;
        let genreString = `${this.store.stringAPI}${this.store.path}${serieId}/credits${this.store.key}&language=it-IT`;
        axios.get(genreString).then((response) => {
          this.store.castSerieList = response.data.cast;
          // Prendo soltanto i primi 5 attori del cast
          this.store.castSerieList.splice(5, this.store.castSerieList.length - 1);
        });
      }
    }
  },
  created() {
    this.genreAPI();
    this.castAPI();
  }
}
</script>
<template>
  <div id="card-details">
    <!-- Movies -->
    <div class="detail" v-if="this.store.contentSearch == '' || this.store.contentSearch == 'movies' ? true : false">
      <div class="close" @click="closeDetail()">
        <font-awesome-icon :icon="['fas', 'xmark']" />
      </div>
      <div class="card-img">
        <img v-if="this.store.movies[this.store.cardIndex].poster_path != null"
          :src="this.store.baseURL + 'w342' + this.store.movies[this.store.cardIndex].poster_path"
          :alt="this.store.movies.title">
        <img v-else src="/img/placeholder.svg" alt="Placeholder_Image">
      </div>
      <div class="info">
        <h2>{{ this.store.movies[this.store.cardIndex].title }}</h2>
        <h3>({{ this.store.movies[this.store.cardIndex].original_title }})</h3>
        <p>{{ this.store.movies[this.store.cardIndex].overview }}</p>
        <div class="genres">
          <h3>Generi: </h3>
          <ul>
            <li v-for="genre in this.store.genreMovieList">{{ genre.name }}</li>
          </ul>
        </div>
        <div class=" cast">
          <h3>Cast: </h3>
          <ul>
            <li v-for="actor in this.store.castMovieList"> {{ actor.name }} ({{ actor.character }})
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Series -->
    <div class="detail" v-else>
      <div class="close" @click="closeDetail()">
        <font-awesome-icon :icon="['fas', 'xmark']" />
      </div>
      <div class="card-img">
        <img v-if="this.store.series[this.store.cardIndex].poster_path != null"
          :src="this.store.baseURL + 'w342' + this.store.series[this.store.cardIndex].poster_path"
          :alt="this.store.series.name">
        <img v-else src="/img/placeholder.svg" alt="Placeholder_Image">
      </div>
      <div class="info">
        <h2>{{ this.store.series[this.store.cardIndex].name }}</h2>
        <h3>({{ this.store.series[this.store.cardIndex].original_name }})</h3>
        <p>{{ this.store.series[this.store.cardIndex].overview }}</p>
        <div class="genres">
          <h3>Generi: </h3>
          <ul>
            <li v-for=" genre in this.store.genreSerieList">{{ genre.name }}</li>
          </ul>
        </div>
        <div class=" cast">
          <h3>Cast: </h3>
          <ul>
            <li v-for="actor in this.store.castSerieList"> {{ actor.name }} ({{ actor.character }})
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
ul {
  margin-left: 1em;
  list-style-type: disc;
}

#card-details .detail {
  position: relative;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 1em;

  width: 1000px;
  background-color: #212121;


  padding: 1em;
  border-radius: 5px;

  .card-img {
    img {
      border-radius: 5px;
    }
  }

  .info {
    align-self: flex-start;

    & *:not(li) {
      padding-bottom: 1em;
    }
  }

  .close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 1em;

    cursor: pointer;
  }
}
</style>