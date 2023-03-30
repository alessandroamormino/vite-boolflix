<script>
import { store } from "../store.js";
export default {
  name: 'AppHeader',
  data() {
    return {
      store,
    }
  }
}
</script>
<template>
  <div id="header-container">
    <input type="text" v-model="store.searchText" @keyup.enter="$emit('performSearch')">
    <button class="btn" @click="$emit('performSearch')">Search</button>
  </div>
</template>
<style lang="scss" scoped></style>