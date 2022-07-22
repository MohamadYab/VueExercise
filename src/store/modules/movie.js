import axios from 'axios';

const movie = {
  // Comment...
  state: {
    // Define a movie state...
    movie: {},
  },
  getters: {
    // Define a method getMovie...
    getMovie: (state) => {
      const theMovie = state.movie;
      // Return the movie...
      return theMovie;
    },
  },
  mutations: {
    // Define a method setMovie...
    setMovie: (state, payload) => {
      // Mutate the state...
      state.movie = payload;
    },
  },
  actions: {
    // Define a method loadMovie...
    loadMovie: (context, payload) => {
      // Make API Call...
      axios.get(`http://www.omdbapi.com/?apikey=e23fd242&i=${payload}`)
        .then((res) => {
          // Commit the mutation...
          context.commit('setMovie', res.data);
        })
        .catch((errors) => {
          // TODO: Handle Errors...
          console.log(errors);
        });
    },
  },
};
export default movie;
