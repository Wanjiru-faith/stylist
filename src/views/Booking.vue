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
                                  <img :src="profile.selectedImage"  width="220">
                              </div>
                              <div class= "stylistInformation">
                              <p style="float:left;">Name:{{profile.stylistName}}</p>
                              <p style="float:left;"><rating/></p>
                              <p style="float:left;">Workplace: {{profile.workplace}}</p> <br>
                              <p style="float:left;">Description: {{profile.decription}} </p>
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
import Stylist from "../components/stylist.vue"
import Rating from "../components/rating.vue"

export default {
  components:{
    Stylist,
    Rating
    
  },

  data(){ 
    return{ 
      profiles:[],


    }
  },
      created(){
        this.$http.get('https://matatu-booking.firebaseio.com/stylist-profile/posts.json').then(function(data){
            return data.json();
        }).then(function(data){
                      var profilesArray = [];
                      for (let key in data){
                      data[key].id = key
                      profilesArray.push(data[key]);
                      }
            
            this.profiles = profilesArray
            console.log(this.profiles);
        }) 
    },
}


</script>


<style lang="scss" scoped>
.stylists{
    color:red;
    display: flex;
    justify-content:flex-start;
    align-content: center; 
    flex-wrap: wrap;
    margin-left:0;   

}
.menu { grid-area: menu; }
.main { grid-area: main; }


.grid-container {
  display: grid;
  grid-template-areas:
    'menu main main main main main';
  grid-gap: 2px;
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
    height:7vh;
    color:black;
    font-size:12px;
    background: pink;
    display:block;
    width: 220px;
    margin: 10px;
    top:0;
    
    
}
img{
    width: 220px;
    max-width: 100%;
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



</style>
