import Vue from 'vue/dist/vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

const transition = new Vue ({
  el: "#transition",
  data: {
    message: "hello",
    show: false
  },
  methods: {
    showTag: function() {
      if (this.show === false)
        return this.show = true
      else if (this.show === true)
        return this.show = false
    }
  }
})