<script>
import { store } from "../store.js";
import AppCard from "./AppCard.vue";
export default {
  name: "AppMain",
  data() {
    return {
      store,
    };
  },
  components: { AppCard }
}
</script>
<template>
  <div id="main-container">
    <h1>Movies_</h1>
    <AppCard v-for="movie in this.store.movies" :movies="movie"></AppCard>
  </div>
</template>
<style lang="scss" scoped></style>