var Foo = Vue.extend({
  template:
    '<div class="foo">' +
      '<h2>This is Foo!</h2>' +
      '<router-view></router-view>' + // <- nested outlet
    '</div>'
})
var Bar = Vue.extend({
  template:
    '<div class="foo">' +
      '<h2>This is Bar!</h2>' +
      '<router-view></router-view>' + // <- nested outlet
    '</div>'
})
var Baz = Vue.extend({
  template:
    '<div class="foo">' +
      '<h2>This is Baz!</h2>' +
      '<router-view></router-view>' + // <- nested outlet
    '</div>'
})

var router = new VueRouter()

router.map({
  '/foo': {
    component: Foo,
      subRoutes: {
      '/bar': {
        // Bar will be rendered inside Foo's <router-view>
        // when /foo/bar is matched
        component: Bar
      },
      '/baz': {
        // Same for Baz, but only when /foo/baz is matched
        component: Baz
      }
      // other sub routes...
    }
  }
})



router.start(Foo, '#app')