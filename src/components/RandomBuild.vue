<template>
    <div>
      <h1>Build Aleatória</h1>
      <div v-if="build">
        <p>Name: {{ build.name }}</p>
        <p>Weapon: {{ build.weapon }}</p>
        <p>Armor: {{ build.armor }}</p>
      </div>
      <button @click="getRandomBuild">Gerar Build</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        build: null
      };
    },
    methods: {
      async getRandomBuild() {
        try {
          const response = await fetch('http://localhost:3000/random-build');
          this.build = await response.json();
        } catch (error) {
          console.error('Erro ao obter build:', error);
        }
      }
    }
  };
  </script>
  