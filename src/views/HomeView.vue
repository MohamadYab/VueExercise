<template>
  <div class="home">
    <div class="header">
      <form>
        <label for="search" >
          <input type="text" id="search" v-model="search" />
        </label>
        <button v-on:click.prevent="searchMovies" >Search</button>
      </form>
      <div v-if="errors.message" class="erorrs">
        {{errors.message}}
      </div>
    </div>
    <div>
      <div v-if="length >= 0">
        <MovieCard
          v-for="movie in getResults()"
          v-bind:key="movie.imdbID"
          v-bind:movie="movie"
          v-on:click="goToMovie(movie.imdbID)" />
      </div>
      <div v-else-if="!errors.message === '' && !length > 0">
        Sorry We couldn't find any movie with this title...
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
      length: 0,
      errors: {
        message: '',
      },
    };
  },
  components: {
    MovieCard,
  },
  methods: {
    searchMovies() {
      // Empty the error message...
      this.errors.message = '';
      // When Search is clicked, Validate the search input...
      // Check if it has any value.
      if (this.search === '') {
        // Reset the results...
        this.$store.dispatch('resetResults');
        this.errors.message = 'You must enter something in the search bar to start searching';
        return;
      }
      // Trim multiple spaces with a single space and trim space around the value...
      this.search = this.search.replace(/\s+/g, ' ').trim();
      // Replace Space with "+" That's how it was on omdb page...
      const encodedSearch = this.search.replace(' ', '+');
      // If it passes validation, Query the search by dispatching it...
      this.$store.dispatch('searchMovies', encodedSearch);
    },

    goToMovie(id) {
      // Dispatch loadMovie with that value...
      this.$store.dispatch('loadMovie', id);
      // Navigate to the movie view...
      this.$router.push({ name: 'movie', query: { i: id } });
    },
    getResults() {
      const result = this.$store.getters.getResults;
      // If data is not present...
      if (result === undefined) {
        this.length = 0;
        return result;
      }
      this.length = 1;
      // Return the search result...
      return result;
    },
  },
};
</script>
