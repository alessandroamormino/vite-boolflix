<script>
import { store } from "../store.js";
import AppCard from "./AppCard.vue";
import CardDetails from "./CardDetails.vue";

export default {
  name: "AppMain",
  data() {
    return {
      store,
    };
  },
  components: {
    AppCard,
    CardDetails,
  },
  methods: {
    cardDetails(index) {
      this.store.isCardOpen = !this.store.isCardOpen;
      this.store.cardIndex = index;
    },
  }
}
</script>
<template>
  <div id="main-container">
    <h1 v-if="this.store.contentSearch == '' || this.store.contentSearch == 'movies' ? true : false">Film</h1>
    <h1 v-else>Serie TV</h1>
    <div id="card-container" :class="this.store.isCardOpen ? 'blur' : ''">
      <AppCard v-if="this.store.contentSearch == '' || this.store.contentSearch == 'movies' ? true : false"
        v-for="(movie, index) in this.store.movies" :movies="movie" @click="cardDetails(index)"></AppCard>
      <AppCard v-else v-for="serie in this.store.series" :series="serie"></AppCard>
    </div>
    <CardDetails v-if="this.store.cardIndex != null && this.store.isCardOpen"></CardDetails>
  </div>
</template>
<style lang="scss" scoped>
#main-container {
  position: relative;
  padding: 2em;

  #card-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 1em;

    // flex
    &.blur {
      filter: blur(10px);
    }
  }

  #card-details {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>