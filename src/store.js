import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stylists:[],
    customerSignIn:[],
    customerLogin:[],
    filterDetails:[],
    stylistSignIn:[],
    stylistLogin:[],

  },

  getters: {
    allStylists: state => {
        return state.stylists
    }
},
  actions: {
    fetchStylist({commit}){
      console.log("We are here");
      axios({
        method: "GET",
        url: 'https://matatu-booking.firebaseio.com/stylists-profiles/posts.json',
        headers: {
          'Content-Type': 'application/json'
        }})
      .then(function (response) {
        console.log("We have data well");
        console.log(response.data);
        //call the muation setTodos using commit and the todos data which is response.data
        commit('setStylist', response.data);
      })
      .catch(function (error) {
        console.log("We have an error");
        console.log(error.response);
      });
       

  },
   async addStylistProfile({commit},{profile}){  
    const response = axios.post('https://matatu-booking.firebaseio.com/stylists-profiles/posts.json', {profile});
    commit('newStylistProfile', response.data); 
    // dispatch('newStylistProfile');
    // console.log(response.data); 
    // console.log(profile);
},

  },     
  mutations: {
    setStylist:(state, stylists) => (state.stylists = stylists),
    newStylistProfile: (state, stylists) => state.stylists.push(stylists)
    
  
  }
}) 

