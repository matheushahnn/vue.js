
var vm = new Vue({
  el: '#app',
  data: {
    titleIndex: 'Treine seus conhecimento da tabuada',
    //home: true,
    challenge: true
  },  
})

vm.selectNumbers = function(number) {
  number = parseInt(number);
  switch(number) {
    case 0:
      vm.home = false;
      vm.challenge = true;
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