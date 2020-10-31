import Vue from 'vue/dist/vue.esm'
import Axios from 'axios'

var bit = new Vue ({
  el: '#bit',
  data: {
    bpi: null,
    haserror: false,
    loading: true
  },
  mounted: function() {
    Axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')

    .then(function(response){
      this.bpi = response.data.bpi
    }.bind(this))

    .catch(function(error){
      console.log(error)
      this.haserror = true
    }.bind(this))

    .finally(function(){
      this.loading = false
    }.bind(this))
  },
  filters: {
    currencyDecimal(value) {
      return value.toFixed(2)
    }
  }
})