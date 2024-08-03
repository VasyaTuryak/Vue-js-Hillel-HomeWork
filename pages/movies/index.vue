<template>
  <div>
    <h1>Movies list</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, assumenda eum illo incidunt libero magni
      nemo officiis praesentium quam ratione saepe similique veritatis voluptate voluptatibus?
    </p>
    <input type="text" v-model="query">
    <button @click="getMovies">
      Search
    </button>

    <section class="movies-list" v-if="store.getItems()">
      <article class="movies-card" v-for="movie in store.getItems()" :key="movie.imdbID">
        <h2>
          {{ movie.Title }}
        </h2>
        <img :src="movie.Poster" :alt="`${movie.Title} poster`">
        <nuxt-link :to="`movies/${movie.imdbID}`">
          Read more >
        </nuxt-link>
      </article>
    </section>
  </div>
</template>
<script setup>
import {useListOfMovies} from "~/store/listOfMovies.js";

const store = useListOfMovies()

const query = ref('')
const moviesList = ref([])


onBeforeMount(() => {

      if (store.getQuery()) {
        query.value = store.getQuery()
        // console.log(query)
        console.log(query)
      }
    }
)

const getMovies = async () => {
  const data = await useFetch('http://www.omdbapi.com/?apikey=cea318f4&s=' + query.value)


  if (data.data?.value?.Response === 'False') {
    throw createError({
      statusCode: 404,
      statusMessage: data.data.value.Error,
      fatal: true
    })
  } else if (data.error.value !== null) {
    throw createError({
      statusCode: data.error.value.statusCode,
      statusMessage: data.error.value.statusMessage,
      fatal: true
    })
  } else {
    store.setListOfMovies(data.data.value.Search)
    store.setQuery(query.value)
  }
}
</script>

<style>
.movies-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 50px;
}

.movies-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.movies-card h2 {
  margin: 0;
}

</style>
