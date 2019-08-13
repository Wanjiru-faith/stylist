import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)



export default new Vuex.Store({
  // plugins: [vuexCookie.plugin, vuexLocal.plugin],

  state: {
    stylists:[],
    specificStylist:[],
    stylistprofile:[],
    customerSignIn:[], 
    customerLogin:[],
    filterDetails:[],
    stylistSignIn:[],
    stylistLogin:[],
  },

  getters: {
    allprofiles: state => {
        return state.stylists;
    }
},
  actions: {
 
  fetchStylist({commit}) {
    let url = 'https://matatu-booking.firebaseio.com/stylist-profile/posts.json';
    axios.get(url)
    .then(function (response) {
      commit('setStylist', response.data); 
      console.log(response.data);
       })
       
  },
  
   addStylistProfile({commit},){  
    const response = axios.post('https://matatu-booking.firebaseio.com/stylist-profile/posts.json', {profile});
    commit('newStylistProfile', response.data); 
    // dispatch('newStylistProfile');
    // console.log(response.data); 
    // console.log(profile);
},
bookingStylist({commit}, id){
  axios.get('https://matatu-booking.firebaseio.com/stylist-profile/posts.json/${id}');
  commit('showStylist', id);
  console.log(id); 
},
fetchStylistProfile({commit},id){
  axios.get('http://localhost:3000/stylistprofile/', this.$route.params.id);
  commit('stylistPreview',id);
  console.log(id)
}
// signInForm({commit}, form){  
//   const response = axios.post('', {form});
//   commit('newSignIn', response.data); 
//   // dispatch('newSignIn');
//   console.log(response.data); 
//   // console.log(profile);
// },
// logInForm({commit}, form){  
//   const response = axios.post('', {form});
//   commit('newLogIn', response.data)

  // dispatch('logInInForm');
  // console.log(response.data); 
  // console.log(profile);
// },

  },     
  mutations: {
    setStylist(state, profiles) {
      state.stylists = profiles
    },
    newStylistProfile: (state, stylists) => state.stylists.push(stylists),
    // newSignIn:(state, customerSignIn) => state.customerSignIn.unshift(customerSignIn),
    // newLogIn:(state, customerLogIn) => state.customerLogIn.unshift(customerLogIn)
    showStylist:(state, id) => (state.stylists = state.stylists.push(stylists => stylists.id)),
    stylistPreview: (state, id) => (state.stylistprofile = state.stylistPreview.push(stylistprofile => stylistprofile.id))
    
  
  }
}) 


