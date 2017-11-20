<template>
  <div class="todo">      
    <h2> Total no. of tasks: {{ count }} </h2>
    <br>
   
   
    <h4> Completed tasks: {{ completeTasksCount }} </h4>
    <h4> Incomplete tasks: {{ inCompleteTasksCount }} </h4> 
  </div>
</template>

<script>
export default {
  name: 'TodoList1',
  components: {
   
  },
  data () {
    return {    
      completeTasksCount: 1,
      inCompleteTasksCount: 2,             
      tasks: [
        {name: 'Task 1', completed: false},
        {name: 'Task 2', completed: false},
        {name: 'Task 3', completed: true}
      ]
    }
  },
  computed: {
    count: function(){
      return this.tasks.length
    }
  },
  methods: {
    updateCount: function() {
      console.log('Update ')   
       
      this.completeTasksCount = this.completeTasks().length
      this.inCompleteTasksCount = this.count - this.completeTasksCount       
    },
    
    completeTasks: function () {
      var completeTasks = this.tasks.filter( function(tasks){
                return(tasks.completed)
            })  
      return completeTasks
    } 
  },
  mounted () {
    console.log('Mounted')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
    font-size: x-large;
    font-weight: 400;
    margin-bottom: 20px;
}
</style>
