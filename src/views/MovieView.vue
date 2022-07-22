<template>
    <div class="movie" v-if="getMovie" >
      <img v-bind:src="getMovie.Poster" alt="Poster's Image">
      <div>
        <p><span class="info" >Title:</span> {{getMovie.Title}}</p>
        <p><span class="info" >Type:</span> {{getMovie.Type}}</p>
        <p><span class="info" >Year:</span> {{getMovie.Year}}</p>
        <p><span class="info" >Released:</span> {{getMovie.Released}}</p>
        <p><span class="info" >Runtime:</span> {{getMovie.Runtime}}</p>
        <p><span class="info" >Genre:</span> {{getMovie.Genre}}</p>
        <p><span class="info" >Director:</span> {{getMovie.Director}}</p>
        <p><span class="info" >Writer:</span> {{getMovie.Writer}}</p>
        <p><span class="info" >Actors:</span> {{getMovie.Actors}}</p>
        <p><span class="info" >Plot:</span> {{getMovie.Plot}}</p>
        <p><span class="info" >Awards:</span> {{getMovie.Awards}}</p>
        <p><span class="info" >Language:</span> {{getMovie.Language}}</p>
        <p><span class="info" >IMDB Rating:</span> {{getMovie.imdbRating}}</p>
        <p><span class="info" >Actors:</span> {{getMovie.Actors}}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MovieView',
  computed: {
    getMovie() {
      return this.$store.getters.getMovie;
    },
  },
};
</script>

<style scoped lang="scss">
.movie {
  display: flex;
  flex-direction: column;
  gap: 24px;
  * {
    flex-grow: 0;
    flex-shrink: 0;
  }
  img {
    max-width:380px;
    height:auto;
  }

  .info {
    font-weight: bold;
    text-decoration: underline;
  }
}
@media (min-width:820px) {
  .movie {
    flex-direction: row;
    gap: 8%;

    p {
      max-width: 480px;
    }
  }
}
</style>
