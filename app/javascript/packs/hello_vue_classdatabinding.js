import Vue from 'vue/dist/vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

const classdatabinding = new Vue ({
  el: '#classdatabinding',
  data: {
    isLarge: true,
    hasError: true,
    largeClass: 'large',
    dangerClass: 'text-danger',
    classObject: {
      large: true,
      'text-danger': true
    },
    LargeClass: {
      large: true,
      'bg-gray': true
    },
    DangerClass: {
      'text-danger': true
    },
    IsLarge: true,
    color: 'red',
    fontSize: 48,
    styleObject: {
      color: 'blue',
      fontSize: '36px'
    }
  }
})