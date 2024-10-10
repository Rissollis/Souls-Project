<template>
  <div id="app">
    <RandomBuild />
  </div>
</template>

<script>
import RandomBuild from './components/RandomBuild.vue';

export default {
  name: 'App',
  components: {
    RandomBuild
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
