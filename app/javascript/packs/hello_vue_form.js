import Vue from 'vue/dist/vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

const form = new Vue ({
  el: "#form",
  data: {
    message: 'hello',
    toggle: true,
    colors: [],
    color: '',
    selected: "",
    Selected: [],
    age: 0
  }
})