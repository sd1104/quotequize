import Vue from 'vue/dist/vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

const eventhandler = new Vue ({
  el: '#eventhandler',
  data: {
    message: '',
    counter: 0,
    time: '',
    erase: ''
  },
  methods: {
    clickhandler: function($event, e) {
      // console.log(e.target.tagName),
      // console.log(e.target.innerHTML),
      // console.log(e.target.type)
      this.message = e
      // console.log($event)
    },
    clickHandler: function() {
      this.counter++
    },
    ClickHander: function() {
      this.time = new Date().toLocaleDateString()
    },
    clear: function() {
      this.erase = ""
    },
    ClearHandler: function() {
      alert('shift + click')
    },
    v_on_handler: function() {
      alert('v-on-omit-writing')
    }
  }
})