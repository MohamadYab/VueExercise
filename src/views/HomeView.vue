<template>
  <div class="home">
    <div class="header">
      <form>
        <label for="search" >
          <input type="text" id="search" v-model="search" />
        </label>
        <button v-on:click.prevent="searchMovies" >Search</button>
      </form>
    </div>
    <div>
      <div v-if="getResults().length > 0">
        <MovieCard
          v-for="movie in getResults()"
          v-bind:key="movie.imdbID"
          v-bind:movie="movie"
          v-on:click="goToMovie(movie.imdbID)" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from '@/components/MovieCard.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      search: '',
    };
  },
  components: {
    MovieCard,
  },
  methods: {
    searchMovies() {
      // When Search is clicked, Validate the search input...
      // If it passes validation, Query the search by dispatching it...
      this.$store.dispatch('searchMovies', this.search);
      // I need to get data from the getters...
      // I need to loop through this data inside the card view...
      // Because I think I need to loop through the data, I need to use computed???
    },

    goToMovie(id) {
      // Dispatch loadMovie with that value...
      this.$store.dispatch('loadMovie', id);
      // Navigate to the movie view...
      this.$router.push({ name: 'movie', query: { i: id } });
    },
    getResults() {
      return this.$store.getters.getResults;
    },
  },
};
</script>
