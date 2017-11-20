<template>
  <div class="todo">        
    <div class="container">
    <article class="article-div message">
      <div class="message-header">
        <p>Hello World</p>
        <button class="delete" @click="show= !show" aria-label="delete"></button>
      </div>
      <transition name="fade" class="message-body">
      <div v-show="show" >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
        </div>
      </transition>
    </article>
    </div>  
    <button @click="render()">  Add </button>
  </div>
</template>

<script>

export default {
  name: 'article',
  data () {
    return {
      show: true
    }
  },
  methods: {

  },
  render(h) {
    return h('div', {
      'class': {
        'is-red': this.isRed
      }
    }, [
      h('p', 'Example Text')
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.completed{
  text-decoration: line-through;
}

.article-div{
    width: 60%;
    margin: 50px;
    margin-left: 15em;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
