import Vue from 'vue/dist/vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

Vue.filter('numberFormat', function(value) {
  return value.toLocaleString()
})

Vue.filter('toUSD', function(jpy) {
  return jpy / 100
})

Vue.filter('readmore', function(text, length, suffix) {
  return text.substring(0, length) + suffix

})

var template = new Vue ({
  el: '#template',
  data: {
    message: 'Can you read Vue.js?',
    htmlmessage: 'Can you read Vue.js? <span span style="color:red">Vue.js</span>',
    number: 20,
    ok: false,
    price: 29800000,
    jpyPrice: 29800000,
    text: 'iPadで画面のスクリーンショットを撮影します。iPadで撮影したスクリーンショットは「写真」アプリ内の「スクリーンショット」アルバムで一覧表示できます。iPadOS』搭載のiPadでは、撮影したスクリーンショットを「ファイル」アプリ内に保存できるようになったほか、Apple Pencilを使用してスクリーンショットを撮ることも可能となっています。',
    url: 'https://www.google.com'
  },
  methods: {
    clickhandler:(function(event){
      this.message = this.message.split('').reverse().join('')
    })
  },
  // filters: {
  //   numberFormat: function(value) {
  //     return value.toLocaleString()
  //   }
  // }
})