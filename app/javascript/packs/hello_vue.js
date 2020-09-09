import Vue from 'vue/dist/vue.esm'

Vue.component('hello-component', {
  template: '<p>Hello</p>'
})

const app = new Vue ({
  el: '#app'
})