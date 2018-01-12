import Vue from 'vue'
import App from './App.vue'
import vueDrag from '../vue-drag'
Vue.use(vueDrag)
new Vue({
  el: '#app',
  render: h => h(App)
})
