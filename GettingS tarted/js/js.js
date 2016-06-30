
var vm = new Vue({
  el: '#app',
  data: {
    numberName: false,
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
    removeProduct: function (index) {
      this.products.splice(index, 1)
    },
    plusUnProduct: function (index) {
      this.products[index].un = parseInt(this.products[index].un) + 1;
    },
    subUnProduct: function (index) {
      this.products[index].un = parseInt(this.products[index].un) - 1
    }
  }
})

// Add product to list of products.
vm.addProduct = function() {
  var name = this.newName.trim()
  var date = this.newDate.trim()
  var un = this.newUn
  if (vm.validName(name)) {
    alert('Nome do produto é permitido apenas letras.');
    return false;
  }
  if (name) {
    this.products.push({ name: name, date: date, un: un })
    this.newName = ''
    this.newDate = ''
    this.newUn = ''
  } else {
    alert("Informe o nome do produto");
  }
}

/**
 * Valid the name. Numbers aren't supported by name's input, just can set letters.
 * @param {String} val value of input.
 * @return {Boolean} ? Just letters : contains number.
 */
vm.validName = function(val) {
  var matches = val.match(/\d+/g); // matches digit.
  if (matches !== null) { // Just letters.
    return true;
  } else {
    return false;    
  }
  
}

// $watch is an instance method
// this callback will be called when `vm.newUn` changes
vm.$watch('newName', function (newVal, oldVal) {
  if (vm.validName(newVal)) {
    vm.numberName = true;
  } else {
    vm.numberName = false;
  }
})

$( '#data' ).datepicker({changeMonth: true, changeYear: true, showButtonPanel: true});
$( '#data' ).datepicker( "option", "dateFormat", 'dd/mm/yy' );
$( "#datepicker" ).datepicker( "option", "showAnim", 'bounce' );
