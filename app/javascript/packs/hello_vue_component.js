import Vue from 'vue/dist/vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

Vue.component('hello-component', {
  template: '<p>hello</p>'
})

let localComponent = {
  template: '<p>Hello</p>'
}

Vue.component('button-counter', {
  data: function() {
    return {
      count: 0
    }
  },
  template: '<p>count:<button @click="count++">{{ count }}</button></p>'
})

const component = new Vue ({
  el: "#component",
  data: {
    message: "hello",
    counter: 0
  },
  components: {
    'local-component' : localComponent
  }
})