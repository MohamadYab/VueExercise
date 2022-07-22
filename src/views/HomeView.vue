<template>
  <div class="home">
    <div class="header">
      <form>
        <label for="search" >
          <input type="text" name="search" id="search"/>
        </label>
        <button>Search</button>
      </form>
    </div>
    <MovieCard />
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from '@/components/MovieCard.vue';

export default {
  name: 'HomeView',
  components: {
    MovieCard,
  },
};
</script>
