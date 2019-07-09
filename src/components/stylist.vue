<template>
    <div>
        <div class="flex-container">
        <div class="stylistContainer" @click.prevent="stylistPage">
            <div class="profileImage"> 
                <img src="../assets/profile1.jpg" height="220" width="220">
            </div>
            <div class= "stylistInformation">
            <p style="float:left;">Name:Faith Wanjiru</p>
            <p style="float:left;"><rating/></p>
            <p style="float:left;"> Workplace:Wamso Beaty Palor, Westlands</p> <br>
            <p style="float:left;">Description:7 years experience major in braiding,cornrows and dreadlocks <i @click="stylistPage">more</i></p>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import Rating from "../components/rating.vue"
export default {
    components:{
        Rating
    
  },
    data(){ 
    return{ 


    }
    
  }

}
</script>

<style scoped>

.stylistContainer {
    border-radius:3px;  
    height:7vh;
    color:black;
    font-size:12px;
    background: pink;
    display:block;
    width: 220px;
    height: 210px;
    margin: 10px;
    top:0;
    
    
}
img{
    width: 220px;
    height: 210px;
    max-width: 100%;
}
.profileImage{
    
    position: relative;
    width: 220px;
    height: 210px;
    
}
.stylistInformation{
    padding-top:60px;
    float:left;
    padding-left:5px;
    color:black;
    font-size:15px; 
    background: pink;
    
}




</style>
