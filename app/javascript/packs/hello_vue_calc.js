import Vue from 'vue/dist/vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

const calc = new Vue ({
  el: '#calc',
  data: {
    message: "hello",
    basePrice: 100
  },
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    },
    taxIncludedPrice: {
      get: function() {
        return parseInt(this.basePrice * 1.08)
      },
      set: function(taxIncludedPrice) {
        this.basePrice = Math.ceil(taxIncludedPrice / 1.08)
      }
    }
  },
  methods: {
    reversedMessageMethod: function() {
      return this.message.split('').reverse().join('')
    }
  }
})