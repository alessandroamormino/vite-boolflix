<script>
import { store } from "../store.js";
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
    }
  }
}
</script>
<template>
  <div id="card-details">
    <div class="close" @click="closeDetail()">
      <font-awesome-icon :icon="['fas', 'xmark']" />
    </div>
    <div class="card-img">
      <img v-if="this.store.movies[this.store.cardIndex].poster_path != null"
        :src="this.store.baseURL + 'w342' + this.store.movies[this.store.cardIndex].poster_path"
        :alt="this.store.movies.title">
      <img v-else src="/img/placeholder.svg" alt="Placeholder_Image">
    </div>
    <div class="info-movie">
      <h2>{{ this.store.movies[this.store.cardIndex].title }}</h2>
      <h3>({{ this.store.movies[this.store.cardIndex].original_title }})</h3>
      <p>{{ this.store.movies[this.store.cardIndex].overview }}</p>
      <div class="cast">
        <h3>Cast: </h3>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#card-details {
  position: relative;

  display: flex;
  flex-flow: row nowrap;
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

  .info-movie {
    & * {
      padding: .5em 0;
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