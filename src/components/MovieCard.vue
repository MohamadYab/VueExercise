<template>
  <div class="card rounded">
    <div class="card-image rounded">
      <img v-bind:src="movie.Poster" alt="Poster's Image">
    </div>
    <div class="card-body">
      <p><span class="info" >Title: </span>{{movie.Title}}</p>
      <p><span class="info" >Type: </span>{{movie.Type}}</p>
      <p><span class="info" >Year: </span>{{movie.Year}}</p>
    </div>
  </div>
</template>

<script>
// import ;
export default {
  name: 'MovieCard',
  props: ['movie'],
};
</script>

<style scoped lang="scss">
.card {
  background-color: white;
  color: black;
  width: 100%;
  max-width: 340px;
  height: 380px;
  margin: 0 auto;
  cursor: pointer;
  overflow: hidden;
  padding: 10px;

  .card-image {
    width: 100%;
    height: 70%;
    background-color: green;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: fit;
    }
  }

  .info {
    font-weight: bold;
  }
}

@media (min-width: 768px) {
  .card {
  margin: 0;
}
}
</style>
