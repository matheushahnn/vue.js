

var vm = new Vue({
  el: '#app',
  data: {
    titleIndex: 'Treine seus conhecimento da tabuada',
    home: true, // Show home.
    challenge: false, // Hide challenge.
    val1: null,
    val2: null,
    total: null
  },    
})

vm.selectNumbers = function(number) {
  number = parseInt(number);
  switch(number) {
    case 0:
      vm.home = false; // Hide home view.
      vm.challenge = true; // Show challenge.
      var random = Math.floor(Math.random() * (1 - 0 + 1)) + 0; // Random chooses test.
      if (random) {
        // A random number is chossen for val1 and val2 inputs.
        console.info('true' + random);
        vm.val1 = vm.total = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
        vm.val2 = vm.total = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
      } else {
        // A random number is chossen for total input..
        console.info('false' + random);
        vm.total = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
      }

    break;
    case 1:
      vm.home = false;
      vm.challenge = true;
    break;
    case 2:

    break;
    case 3:

    break;
  }
}