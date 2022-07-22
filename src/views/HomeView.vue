<template>
  <div class="home">
    <div class="header">
      <form class="search-form">
        <label for="search" >
          <input type="text" id="search" v-model="search"
          v-bind:class="{error: errors.message !== '', rounded: true, search: true}"
          placeholder="Search For A movie by name" />
        </label>
        <button v-on:click.prevent="searchMovies" class="rounded" >Search</button>
      </form>
    </div>
    <div v-if="errors.message" class="errors">
      {{errors.message}}
    </div>
    <div>
      <div v-if="errors.message == '' && length == 0">
        Sorry We couldn't find any movie with this title...
      </div>
      <div v-if="length >= 0" class="results">
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
      length: 0,
      errors: {
        message: '',
      },
    };
  },
  components: {
    MovieCard,
  },
  created() {
    // Reset the results...
    this.$store.dispatch('resetResults');
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

<style scoped lang="scss">
// Variables...
$primary: #05052E;
$accent: #ECEC13;

.header {
  margin: 0 auto 40px auto;
}

.search-form {
  #search {
    width: 70%;
    padding: 8px;
  }

  .search {
    border: none;
  }
  .error {
    border: 2px red solid;
  }

  button {
    width: 20%;
    background-color: $accent;
    border: none;
    padding: 8px;
    margin-left: 10%;
    cursor: pointer;
  }
}

.errors {
  border-bottom: 1px red solid;
}

.results {
  height: 80vh;
  overflow-x: hidden;
  overflow-y: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  * {
    flex-grow: 0;
    flex-shrink: 0;
  }
}
// @media (min-width:320px) {}
</style>
