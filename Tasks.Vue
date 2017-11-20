<template>
    <div>  
    <input type="text"  v-model='newTask' @keyup.enter="addTask()"/>
    <button @click="addTask()" >Add task</button>      
    <ul>      
      <li :class="{ 'completed' : task.completed}" v-for="(task, index) in tasks" >
        <span @click="toggle(index)">{{ task.name }} </span>
        <button @click="removeTask(index)">x</button>
      </li>      
    </ul>
    </div>
</template>

<script>
export default {
    name: 'Tasks',
    props: {
        tasks: {
            type: Array,
        }
    },
    data () {
        return {
            completeTasks:'',
            newTask: '',
        }
    },
     methods: {
        toggle: function (index) {
            this.tasks[index].completed = ! this.tasks[index].completed        
            this.$emit('updateCount')
        },    
        removeTask: function (index) {
            this.tasks.splice(index, 1)
            this.$emit('updateCount')
        },   
        addTask: function () {      
            var task = {name: this.newTask, completed: false}
            this.tasks.push(task)
            this.newTask = ''      
            this.$emit('updateCount')
        }
  }
}
</script>

<style scoped>
.completed{
  text-decoration: line-through;
}
ul {

  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 15px;
}
</style>