<template>

  <div>
    <div class="grid-container">
        
        <div class="menu">services</div>
        <div class="main">
            <div class="stylists">
                <div v-for="profile in  profiles" class="single-profile" :profile="profile" :key="profile.id">
                  <router-link v-bind:to="'/stylist/' + profile.id">

                          <div class="stylistContainer" >
                              <div class="profileImage"> 
                                  <img :src="profile.selectedImage" class= "avatar" >
                              </div>
                              <div class= "stylistInformation">
                              <p style="float:left;">Name:{{profile.stylistName}}</p>
                              <p style="float:left;"><rating/></p>
                              <p style="float:left;">Workplace: {{profile.workplace}}</p> <br>
                              <p style="float:left;">Description: {{profile.description | snippet}} </p>
                              </div>
                            </div>

                 </router-link>
                </div>
            </div>
        </div>  
 
    </div>
  </div>
</template>

<script>
import Stylist from "../views/stylist.vue"
import Rating from "../components/rating.vue"
import { mapGetters, mapActions } from 'vuex';
import { mapState } from 'vuex'

export default {
      name:"Booking",
    // implement the mapGetters
    computed:{
        stylists(){
        return this.$store.getters.allStylists;
        }
        // ...mapGetters(['allTodos'])
    }, 
  components:{
    Stylist,
    Rating
    
  },
  

  data(){ 
    return{ 
      profiles:[],
    }
  },
       filters:{
         toUppercase(value){
             return value.toUpperCase(); 
         },
         snippet(value){
         return value.slice(0,10) + '...more';
         }
     },
      created(){
        this.$store.dispatch('fetchStylist');
        // this.fetchStylist();
    },
    //     methods:{
    //     ...mapActions(['fetchStylist']),
        
    // },
}


</script>


<style lang="scss" scoped>
.stylists{
    color:red;
    display: flex;
    justify-content:flex-start;
    align-content: center; 
    flex-wrap: wrap;
    margin-left:15px;
    margin-top:20px;
    
      

}
.menu { grid-area: menu; }
.main { grid-area: main; }


.grid-container {
  display: grid;
  grid-template-areas:
    'menu main main main main main';
  grid-gap: 5px;
  background-color: #2196F3;
  padding-top: 70px;

}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 30px;
}
.stylistContainer {
    border-radius:3px;  
    color:black;
    font-size:12px;
    background: pink;
    display:block;
    width: 220px;
    margin: 2px;
    top:0;
    max-height:300px;
    min-height:300px;
    
    
}

.profileImage{
    position: relative;
    width: 220px;
    
}
.stylistInformation{
    float:left;
    padding-left:5px;
    color:black;
    font-size:15px; 
    background: pink;
    margin-top:0;
    
    
}
img{
  border-radius: 70%;
  vertical-align: middle;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding-top:50px;
  margin-top:1px;


}



</style>
