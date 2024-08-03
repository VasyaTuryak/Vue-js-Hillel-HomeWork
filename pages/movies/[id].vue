<template>
  <div>
    <h1>Single movie page</h1>
    <p>Title: {{store.getItem(route.params.id).Title}}</p>
    <p>POSTER</p>
    <img :src="store.getItem(route.params.id).Poster" alt="POSTER">
    <p>ID: {{store.getItem(route.params.id).imdbID}}</p>
    <p>Year: {{store.getItem(route.params.id).Year}}</p>
    <p>Type: {{store.getItem(route.params.id).Type}}</p>
    <p>{{store.getItem(route.params.id).P}}</p>
  </div>
</template>

<script setup>
import {useListOfMovies} from "~/store/listOfMovies.js";

const store = useListOfMovies()

definePageMeta({
   layout: 'single-movie'
 })

const route = useRoute()


</script>

<style lang="scss" scoped>

</style>
