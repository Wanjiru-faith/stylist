import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import { MdDatepicker, MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import axios from 'axios'
import VueRouter from 'vue-router' 
import 'core-js';

Vue.use(VueRouter)
Vue.use(VeeValidate);
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdDatepicker)
Vue.component('v-select', vSelect)
Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.use(VueResource)
// Vue.use(axios)
// import Vue from 'vue'
// import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'   

// Vue.use(Buefy)


//we have modified the vue engine and added axios. 
//We can now use axios in all our components like this.$axios.
Vue.prototype.$axios = axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}


//or We can now use axios in all our components like this.$http.
//Vue.prototype.$http = Axios;

// const token = localStorage.getItem('token')
// if (token) {
//  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
 