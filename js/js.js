new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [
      { 
      	product: 'Pegro',
      	date: '10-12-2014',
      	un:10
     	}	
    ]
  },
  methods: {
    addTodo: function () {
      var text = this.newTodo.trim()
      if (text) {
        this.todos.push({ product: text })
        this.newTodo = ''
      }
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
    },
    plusUnTodo: function (index) {
      this.todos[index].un += 1
    },
    subUnTodo: function (index) {
      this.todos[index].un -= 1
    }
  }
})