// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router'
import vueCustomElement from 'vue-custom-element';
import HelloWorld from './components/HelloWorld.vue';

Vue.config.productionTip = false

// Configure Vue to ignore the element name when defined outside of Vue.
// Vue.config.ignoredElements = [
//   'hello-world'
// ];

// Enable the plugin
Vue.use(vueCustomElement);
Vue.customElement('hello-world', HelloWorld);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
			message: 'Hello Vue.js!'
		  }
})
