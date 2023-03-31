<script>
import { store } from "../store.js";
export default {
  name: 'AppHeader',
  data() {
    return {
      store,
    }
  },
  emit: ['performSearch', 'showsTrending'],
  methods: {
    searchMovies() {
      this.store.contentSearch = 'movies';
    },
    searchTvShows() {
      this.store.contentSearch = 'shows';
    }
  }
}
</script>
<template>
  <nav>
    <div class="nav-left">
      <ul>
        <li><a href="#" @click="searchMovies()">Movies</a></li>
        <li><a href="#" @click="searchTvShows(), $emit('showsTrending')">TV Shows</a></li>
      </ul>
    </div>
    <div class="nav-right">
      <div id="header-container">
        <input type="text" v-model="store.searchText" @keyup.enter="$emit('performSearch')">
        <button class="btn" @click="$emit('performSearch')">Search</button>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  // position
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  // flex

  padding: 0 2em;

  height: 80px;
  width: 100%;

  background-color: #212121;

  .nav-left {
    ul {
      display: flex;
      gap: 1em;

      li {
        a {
          color: white;
          text-decoration: none;

          &:active,
          &:focus {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
  }

}
</style>