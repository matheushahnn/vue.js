var Foo = Vue.extend({
  template:
    '<div>' +
      '<p>Current route path: {{$route.path}}</p>' +
      '<p>Current route params: {{$route.params | json}}</p>' +
    '</div>'
})

var router = new VueRouter()

router.map({
  '/a': {
    component: Foo,
    auth: true
    
  },
  '/login': {
    component: {
      template: '<h1>AAAAAAAAAAAA</h1>'
    }
  },
  '/user/:username': {
    component: {
      template: '<p>username is {{$route.params.username}}</p>'
    }
  }
})

router.beforeEach(function (transition) {
  if (transition.to.auth) {
    transition.redirect('/login')
  } else {
    console.info(transition.to.params) // if route is /user/bar = {username: 'bar'}
    console.info(transition.to.path) // if route is /user/bar = /user/bar
    transition.next()
  }
})

router.start(Foo, '#app')