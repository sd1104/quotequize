import Vue from 'vue/dist/vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

const conditional = new Vue ({
  el: '#conditional',
  data: {
    toggle: false,
    color:'yellow'
  }
})