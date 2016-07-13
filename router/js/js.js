// Define some components
var Pag1 = Vue.extend({
    template: '<p>Página 1</p>'
})

var Pag3 = Vue.extend({
    template: '<p>Página 3</p>'
})

var NotFound = Vue.extend({
  template: '<p>Não foi contrada nenhuma página com esta numeração!</p>'
})

// The router needs a root component to render.
// For demo purposes, we will just use an empty one
// because we are using the HTML as the app template.
// !! Note that the App is not a Vue instance.
var App = Vue.extend({})

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter()

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
    '/pag1': {
        component: Pag1
    },
    '/pag3': {
        component: Pag3
    },
    '*': {
      component: NotFound
    }
})

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#app')