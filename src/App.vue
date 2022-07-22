<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
// Very Simple Reset...
@import '@/assets/_resets.scss';
// Variables...
$primary: #05052E;
$accent: #ECEC13;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $primary;
  color: white;
  height: 100vh;
  overflow-x: hidden;
}

.container {
width: 90%;
margin: 0 auto;
}

.rounded{
  border-radius: 10px;
}

nav {
  padding: 30px 50px 30px 0px;
  text-align: right;
  background-color: #191997;
  margin-bottom: 20px;
  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: white;
      &:hover {
        color: #c3c3c3;
      }
    }
  }
}

@media (min-width: 768px) {
  .container {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
