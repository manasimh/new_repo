<template>
  <div class="Count">
     {{ $store.state.count }} is {{evenOdd}}
     <br>
     <button @click='increment'>+</button>
     <button @click='decrement'>-</button>
     <button @click='incrementIfOdd'>Increment If Odd</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CountClicks',
  computed: {
    ...mapGetters(['evenOdd'])
  }, 
  methods: {
      ...mapActions([
          'increment',
          'decrement',
          'incrementIfOdd'
      ])
  }
  //data () {
   // return {
     // msg: 'Welcome to Vue.js App'
    //}
 // }
}
</script>