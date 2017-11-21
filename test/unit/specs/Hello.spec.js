import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor({ 
      propsData: {
        msg: 'Welcome to Vue.js App'
      } 
    }).$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Vue.js App')
  })
})
