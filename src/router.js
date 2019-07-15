import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import signIn from './views/signIn.vue'
import Salon from './views/Salon.vue'
import Booking from './views/Booking.vue'
import Pay from './views/Pay.vue'
import Filter from './views/Filter.vue'
import Stylistprofile from './views/stylistProfile.vue'
import stylist from '../src/components/stylist.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', name: 'filter', component: Filter},
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {path: '/sign-in', name:'sign-in', component:signIn,
    meta: {hideNavigation: true}},
    {path: '/salon', name:'Salon', component:Salon},
    {path: '/booking', name:'Booking', component:Booking},
    {path: '/pay', name:'Pay', component:Pay},
    {path: '/login', name:'Login', component:Login,
    meta: {hideNavigation: true}},
    {path: '/stylistprofile', name:'Stylistprofile', component:Stylistprofile},
    {path:'/stylist/:id', component:stylist}
    
    
  ]
})
