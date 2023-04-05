<script>
import { store } from "../store.js";
export default {
  name: 'AppHeader',
  data() {
    return {
      store,
      isDropdownOpen: false,
    }
  },
  emit: ['performSearch', 'showsTrending'],
  methods: {
    searchMovies() {
      this.store.contentSearch = 'movies';
    },
    searchTvShows() {
      this.store.contentSearch = 'shows';
    },
  }
}
</script>
<template>
  <nav>
    <div class="nav-left">
      <img src="/img/logo.png" alt="logo Boolflix">
      <ul>
        <li><a href="#" @click="searchMovies()">Film</a></li>
        <li><a href="#" @click="searchTvShows(), $emit('showsTrending')">Serie TV</a></li>
      </ul>
    </div>
    <div class="nav-right">
      <span @click="this.isDropdownOpen = !this.isDropdownOpen">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="open" />
      </span>
      <div v-show="this.isDropdownOpen" class="dropdown">
        <ul>
          <li v-for="genre in this.store.allGenreList">
            <input type="checkbox" :id="genre.id" :value="genre.id" v-model="this.store.selectedGenre">
            <label :for="genre.id">{{ genre.name }}</label>
          </li>
        </ul>
        <pre>(not working)</pre>
      </div>
      <input type="text" v-model="store.searchText" @keyup.enter="$emit('performSearch')" placeholder="Cerca un titolo..">
      <button class="btn" @click="$emit('performSearch')">Search</button>
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

  padding: 1em 2em;

  height: 80px;
  width: 100%;

  background-color: #000;

  .nav-left {
    display: flex;
    align-items: center;

    gap: 2em;

    height: 100%;

    img {
      height: 100%;
    }

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

  .nav-right {
    position: relative;
    // position
    display: flex;
    align-items: center;
    gap: 1em;

    input {
      padding: .5em;
      border: 1px solid #fff;
      background-color: #030303;
      color: #fff;

      &:focus-visible {
        outline: none;
      }
    }

    .btn {
      padding: .5em 1em;
      background-color: #fff;
      border: none;
    }

    .open {
      cursor: pointer;
    }

    .dropdown {
      position: absolute;
      top: 20px;
      left: -130px;
      // position
      background-color: #212121;
      border-radius: 5px;

      ul {
        padding: .5em 0;

        li {
          padding: .3em 1em;

          &:hover {
            background-color: #555555;
          }

          label {
            padding-left: .5em;
          }
        }
      }
    }
  }

}
</style>