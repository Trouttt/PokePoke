<template>
  <div id="app">
    <div v-for="(pokemon, index) in pokemons" :key="index">
      <Pokemon :name="pokemon.name" :url="pokemon.url" :num="index + 1"/>
    </div>
  </div>
</template>

<script>
  import Pokemon from './components/Pokemon';
  import axios from 'axios';
  export default {
    name: 'App',
    data(){
      return{
        pokemons: []
      }
    },
    created: function(){
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0").then(res => {
        
        this.pokemons = res.data.results;
        console.log(this.pokemons);
      })
    },
    components:{
      Pokemon
    }
  }
</script>

<style scoped>

</style>