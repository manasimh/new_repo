<template>
	
	<h3>{{ msg }}</h3>  

</template>

<script>

export default{
  name: 'ChildComponent',
  components:{
    
  },
  props: {
    msg:{
      type: String,
      default: 'This is new Page!!'
    }
  }  ,
  data () {
  	  return {
      
    }
  }
}
</script>