import App from './App.vue'
import CallToAction from './CallToAction.vue'
import Contacts from './Contacts.vue'
import Contents from './Contents.vue'
import Features from './Features.vue'
import Footers from './Footers.vue'
import Forms from './Forms.vue'
import Headers from './Headers.vue'
import Pricings from './Pricings.vue'
import Teams from './Teams.vue'
import Testimonials from './Testimonials.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../node_modules/froala-design-blocks/dist/css/froala_blocks.min.css');

Vue.config.productionTip = false

// Require Froala Editor js file.
require('froala-editor/js/froala_editor.pkgd.min.js')

// Require Froala Editor css files.
require('froala-editor/css/froala_editor.pkgd.min.css')
require('froala-editor/css/froala_style.min.css')

// Import and use Vue Froala lib.
import VueFroala from 'vue-froala-wysiwyg'
Vue.use(VueFroala)

const router = new VueRouter({
  routes: [
    { path: '/call-to-action', component: CallToAction },
    { path: '/contacts', component: Contacts },
    { path: '/contents', component: Contents },
    { path: '/features', component: Features },
    { path: '/footers', component: Footers },
    { path: '/forms', component: Forms },
    { path: '/headers', component: Headers },
    { path: '/pricings', component: Pricings },
    { path: '/teams', component: Teams },
    { path: '/testimonials', component: Testimonials },
  ],
  linkActiveClass: 'active'
})

Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')