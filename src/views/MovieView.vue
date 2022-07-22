<template>
    <div class="movie">
      {{getMovie}}
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

</style>
