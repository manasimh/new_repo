import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ChildComponent from '@/components/MyComponent/ChildComponent'
import HomeComponent from '@/components/MyComponent/HomeComponent'
import List from '@/components/MyComponent/TodoList'
import Article from '@/components/MyComponent/Article'
import CountClicks from '@/components/MyComponent/CountClicks'
import axios from 'axios'

Vue.use(Router)
Vue.use(axios)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeComponent
    },
    {
      path: '/child',
      name: 'Child',
      component: ChildComponent
    },
    {
      path: '/todo',
      name: 'TodoList',
      component: List
    },
    {
      path: '/article',
      name: 'Article1',
      component: Article
    },
    {
      path: '/clicks',
      name: 'CountClicks',
      component: CountClicks
    }
  ]
})
