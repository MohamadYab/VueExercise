<template>
    <div class="movie">
      {{getMovie}}
    </div>
</template>

<script>
export default {
  name: 'MovieView',
  created() {
    // I can pass the payload using props. Another option can be to access the data
    // from the URL... I am not sure about the URL, it is too much work to be done...
    // TODO: I don't need to pass props, I can dispate the method with the id from home...
    this.$store.dispatch('loadMovie', 'tt4644488');
  },
  computed: {
    // I want to rerender the MoviewView whenever the props value changes...
    getMovie() {
      return this.$store.getters.getMovie;
    },
  },
};
</script>

<style scoped lang="scss">

</style>
