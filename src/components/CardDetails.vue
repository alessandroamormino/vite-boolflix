<script>
import { store } from "../store.js";
export default {
  name: 'CardDetails',
  data() {
    return {
      store,
    }
  },
  created() {
    console.log(this.store.movies);
  }
}
</script>
<template>
  <div id="card-details">
    <h2>{{ this.store.movies[this.store.cardIndex].title }}</h2>
  </div>
</template>
<style lang="scss" scoped>
#card-details {
  width: 500px;
  height: 500px;
  background-color: #fff;
  color: black;
}
</style>