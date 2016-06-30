
var vm = new Vue({
  el: '#app',
  data: {
    newName: '',
    newDate:'',
    newUn: '',
    products: [
      { 
      	name: 'Pegro',
      	date: '10-12-2014',
      	un:10
     	}	
    ]
  },
  methods: {
    addProduct: function () {
      var name = this.newName.trim()
      var date = this.newDate.trim()
      var un = this.newUn
      if (name) {
        this.products.push({ name: name, date: date, un: un })
        this.newName = ''
        this.newDate = ''
        this.newUn = ''
      }
    },
    removeProduct: function (index) {
      this.products.splice(index, 1)
    },
    plusUnProduct: function (index) {
      this.products[index].un += 1
    },
    subUnProduct: function (index) {
      this.products[index].un -= 1
    }
  }
})

// $watch is an instance method
vm.$watch('newUn', function (newVal, oldVal) {
  console.info(newVal);
  console.info(oldVal);
  // this callback will be called when `vm.a` changes
})
