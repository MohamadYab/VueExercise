import { createStore } from 'vuex';
import movie from './modules/movie';
import results from './modules/results';

export default createStore({
  // We use modules when we want to include more than one module from different files...
  modules: {
    // I will be having two screens, so I might have two different modules???
    movie,
    results,
  },
});
