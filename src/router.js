import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import signIn from './views/signIn.vue'
import Salon from './views/Salon.vue'
import Booking from './views/Booking.vue'
import Pay from './views/Pay.vue'
import Filter from './views/Filter.vue'
import Stylistprofile from './views/stylistProfile.vue'
import stylist from './views/stylist.vue'
import HelloWorld from './components/HelloWorld.vue'
import stylistProfilePreview from './views/stylistProfilePreview.vue'


Vue.use(Router)

var router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', name: 'filter', component: Filter,
    meta: { 
      //only authenticated users should see it
      requiresAuth: true,
      guest:false,
      is_stylist:false}},      
    {path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {path: '/sign-in', name:'sign-in', component:signIn,
    meta: {hideNavigation: true,
      // guest: true
    }},
    {path: '/salon', name:'Salon', component:Salon},
    {path: '/booking', name:'Booking', component:Booking,
    //meta: { requiresAuth: true}
  },
    {path: '/pay', name:'Pay', component:Pay},
    {path: '/login', name:'Login', component:Login,
    meta: {hideNavigation: true,
      //only non authenticated users should see it
      // guest: true
    }},
    {path: '/stylistprofile/:id', name:'Stylistprofile', component:Stylistprofile,
    meta: { 
      //only stylist users should see it
      requiresAuth: true,
      is_stylist : true,
      guest:false
  }
},
    // {path:'/stylist/:id', component:stylist},
    {path:'/stylistProfilePreview/:id', component:stylistProfilePreview,
    meta: { 
      //only stylist users should see it
      requiresAuth: true,
      is_stylist : true,
      guest:false
  }
  },
    {path:'/HelloWorld', component:HelloWorld, name:'HelloWorld',
  meta:{
      guest:true
  }}
    
    
  ]   
})
//beforeEach method
//This is where we can define our checking condition and restrict user access
router.beforeEach((to, from, next) => {
  //Our check is on the to object.
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('jwt') == null) {
        //next is a callback function that continues the processing of the request
          next({ 
              path: '/login',
              params: { nextUrl: to.fullPath }
          })
      } else {
          let user = localStorage.getItem('user')  ? JSON.parse(localStorage.getItem('user')) : [];
          if(to.matched.some(record => record.meta.is_stylist )) {
              if(user.is_stylist == 1){
                  next()
              }
              else{
                  next({name: 'filter'})
              }
          }else {
              next()
          }
      }
    } else if(to.matched.some(record => record.meta.guest)) {
      if(localStorage.getItem('jwt') == null){
          next()//login
      }
      else{
          next({ name: 'filter'})
      }
  }else {
      next() 
  }
})
//Always ensure you have next() called at the end of every condition you are checking. 
//This is to prevent your application from failing in the event that there is a condition you forgot to check.
export default router


