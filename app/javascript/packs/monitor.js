import Vue from 'vue/dist/vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

const monitor = new Vue ({
  el: '#monitor',
  data: {
    message: 'hello',
    km: 0,
    m: 0,
    mm: 0,
    firstName: '',
    lastName: '',
    fullName: '',
    colors: [
      { name: 'Red' },
      { name: 'Blue' },
      { name: 'Green' }
    ]
  },
  watch: {
    message: function(newValue, oldValue) {
      console.log(`newValue=${newValue}`)
      console.log(`oldValue=${oldValue}`)
      console.log('new: %s, old: %s', newValue, oldValue)
    },
    km: function(value) {
      // console.log(value)
      this.km = value
      this.m = value * 1000
      this.mm = value * 1000000
    },
    m: function(value) {
      // console.log(value)
      this.km = value / 1000
      this.m = value
      this.mm = value * 1000
    },
    mm: function(value) {
      // console.log(value)
      this.km = value / 1000000
      this.m = value / 1000
      this.mm = value
    },
    firstName: function(value) {
      this.fullName = value + '' + this.lastName
    },
    lastName: function(value) {
      this.fullName = this.firstName + '' + value
    },
    colors: {
      handler: function(newValue, oldValue) {
        console.log('Update!')
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    FullName: function() {
      return this.firstName + "" + this.lastName
    }
  }

})