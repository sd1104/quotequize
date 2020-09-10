import Vue from 'vue/dist/vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

var vm = new Vue ({
  el: '#vm',
  data: {
    message: 'Can you read Vue.js?',
    count: 0,
    user: {
      lastName: 'Yamada',
      firstName: 'Taro',
      age: 20
    },
    colors: ['red', 'blue', 'green'],
    toggle: true
  }
})