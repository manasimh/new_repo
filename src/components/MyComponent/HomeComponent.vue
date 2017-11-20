<template>		
    <div>        
        <h2>Essential Links</h2>
        <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
        <br>
        <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
        <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>
       <ul v-if="posts && posts.length">
            <li v-for="post of posts">
            <p><strong>{{post.title}}</strong></p>
            <p>{{post.body}}</p>
            </li>
       </ul>

        <ul v-if="errors && errors.length">
            <li v-for="error of errors">
            {{error.message}}
            </li>
        </ul>
    </div>    
</template>

<script>

import axios from 'axios'

export default{
    
  name: 'HomeComponent',
  components:{
    
  }, 
  data () {
  	  return {
        posts: [],
        errors: []
    }
  },  
  
  mounted(){
    //this.loadData()
  },
  methods: {
      loadData: function() {
        var url = 'https://jsonplaceholder.typicode.com/posts'
        // this.posts= [{title:'Title',body: 'This is body'}]
         axios.get(url)
            .then( (response) => {
                this.posts = reponse.data
                console.log(reponse.data)
            })
            .catch( (e) =>{
                this.errors.push(e)
                console.log("error")
        })
      }
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>