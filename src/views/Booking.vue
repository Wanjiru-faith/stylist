<template>

  <div>
    <div class="grid-container">
        
        <div class="menu">services</div>
        <div class="main">
            <div class="stylists">
          <stylist/>
          <stylist/>
          <stylist/>
          <stylist/>
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


    }
  }
}


</script>


<style lang="scss">
.stylists{
    color:red;
    display: flex;
    justify-content:flex-start;
    align-content: center; 
    flex-wrap: wrap;
    padding-bottom: 700px; 
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



</style>
