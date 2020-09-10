import Vue from 'vue/dist/vue.esm'
import Axios from 'axios'

var bit = new Vue ({
  el: '#bit',
  data: {
    bpi: null
  },
  mounted: function() {
    Axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(function(response){
      // console.log(response.data.bpi)
      // console.log(response.data.bpi.USD.rate_float)
      this.bpi = response.data.bpi
    }.bind(this))//これ何？
  }
})