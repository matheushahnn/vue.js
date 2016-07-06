var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})

example1.items = example1.items.filter(function (item) {
  return item.message.match(/Foo/)
})

var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})

var example3 = new Vue({
  el: '#example-3',
  data: {
    items: [
      '1',
      '2',
      '3'
    ]
  }
})

example3.items.$remove('2');