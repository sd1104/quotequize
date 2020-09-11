import Vue from 'vue/dist/vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

const todo = new Vue ({
  el: '#todo',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    addItem: function(event) {
      if(this.newItem == '') return;
      var todo = {
        item: this.newItem,
        isDone: false
      };

      this.todos.push(todo)
      this.newItem=''
    },
    deleteItem: function(index) {
      // alert(index);
      this.todos.splice(index, 1)
    }
  }
})