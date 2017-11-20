<template>
  <div class="hello">
    <h1>{{ msg }}</h1>    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg:{
      type: String,     
    }
  } 
  //data () {
   // return {
     // msg: 'Welcome to Vue.js App'
    //}
 // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {  
  margin: 30px;
  font-size: xx-large;
  font-weight: bold;
}
</style>
