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

    </div>
    <MovieCard />
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
      // I need to loop through this data inside the card view.
    },

    goToMovie: () => {
      // I think this needs to be inside the computed property...
      // TODO: This function must be inside the MovieCard Componenet...
      // Get the value of the input using the v-model...
      // Dispatch loadMovie with that value...
      // Navigate to the movie view...
    },
  },
};
</script>
