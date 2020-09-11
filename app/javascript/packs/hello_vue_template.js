import Vue from 'vue/dist/vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

var template = new Vue ({
  el: '#template',
  data: {
    message: 'Can you read Vue.js?'
  },
  methods: {
    clickhandler:(function(event){
      this.message = this.message.split('').reverse().join('')
    })
  }
})