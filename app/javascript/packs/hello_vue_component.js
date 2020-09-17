import Vue from 'vue/dist/vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

Vue.component('hello-component', {
  template: '<p>hello</p>'
})

const component = new Vue ({
  el: "#component",
  data: {
    message: "hello"
  }
})