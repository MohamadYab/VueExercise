import axios from 'axios';

const results = {
  // Comment...
  state: {
    // Define a movie state...
    results: [],
  },
  getters: {
    // Define a method getMovie...
    getResults: (state) => {
      const movies = state.results;
      // Return the movie...
      return movies;
    },
  },
  mutations: {
    // Define a method setMovie...
    setResults: (state, payload) => {
      // Mutate the state...
      state.results = payload;
    },
  },
  actions: {
    // Define a method loadMovie...
    searchMovies: (context, payload) => {
      // Make API Call...
      axios.get(`http://www.omdbapi.com/?apikey=e23fd242&s=${payload}`)
        .then((res) => {
          // Commit the mutation...
          context.commit('setResults', res.data.Search);
        })
        .catch((errors) => {
          // TODO: Handle Errors...
          console.log(errors);
        });
    },
  },
};
export default results;
