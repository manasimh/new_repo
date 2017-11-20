<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul id="menu">
      <li> <a href="/" > Home </a> </li>     
      <li><a href="/todo"> To Do List</a></li>
      <li><a href="/article"> Articles</a></li>
      <li><a href="/clicks"> Count Clicks</a></li>
    </ul>
	  <HelloWorld msg = 'Welcome to Vue.js App' />
   
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  name: 'app',
  components:{
    'HelloWorld' : () => import('./components/HelloWorld.vue')    
  },
  
  methods:{
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
#menu li a{
  text-decoration: none;
}
</style>
