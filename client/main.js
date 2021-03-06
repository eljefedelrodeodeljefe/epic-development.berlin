var Vue = require('vue')
var css = require('./app.css')

import HeaderNav from './components/layouts/header-nav/index.js'
import Home from './components/pages/home/index.js'
import AppSplash from './app.js'
import Datenschutz from './components/pages/datenschutz/index.js'
// // var App = require('./app.js')
var VueRouter = require('vue-router')

// Registering middleware
Vue.use(VueRouter)

// bootstrapping the instance
var App = Vue.extend({
  components: {
    HeaderNav,
    AppSplash
  },
  template: require('./app.html')
})
// End of setting up vue

// Routing below...

var router = new VueRouter({
  hashbang: false
})

router.map({
  '/': {
    component: Home
  },
  '/datenschutz': {
    component: Datenschutz
  }
})

router.start(App, '#app')
// End of routing
