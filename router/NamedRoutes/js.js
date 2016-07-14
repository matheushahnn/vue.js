var Foo = Vue.extend({})

var User = Vue.extend({
  template: 
    '<div>' +
      '<p>path: {{ $route.path }}</p>' +
      '<p>params: {{ $route.params | json }}</p>' +
    '</div>'
})

var router = new VueRouter()

router.map({
  '/user/:userId': {
    name: 'user', // give the route a name
    component: User
  }
})

router.go({ name: 'user', params: { userId: 13 }})

router.start(Foo, '#app')