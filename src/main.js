// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './Index'
import Home from './components/Home'
import Ecosystem from './components/Ecosystem'
import Interaction from './components/Interaction'
import Atout from './components/Atout'
import Contact from './components/Contact'

Vue.use(VueRouter)

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: Home },
  { path: '/ecosystem', name: 'ecosystem', component: Ecosystem },
  { path: '/interaction', name: 'interaction', component: Interaction },
  { path: '/atout', name: 'atout', component: Atout },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '*', redirect: '/home' }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for routes: routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')
