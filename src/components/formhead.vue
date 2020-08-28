<template>
  <div id="formhead">
          <div id="sign-up"  class = "button"
          :style="{'background': signActive}"
          @click="switchsignup"
          >
      <button>
          SIGN-UP
      </button>
  </div>

  <div id="login" class = "button"
  :style="{'background': logActive}"
  @click="switchlogin">
      <button>
          LOGIN
      </button>
  </div>
  
      </div>
</template>

<script>
export default {
      data(){
    return{
        signActive: 'black',
        logActive: 'black'
    }
      },
    methods:{
        switchsignup(){
            if(this.signActive){
                this.signActive ='grey'
                this.logActive = 'black'
            }else{
                this.signActive
            }
            this.$router.push({path:'/sign-up'})
         
        },
        switchlogin(){
            if(this.signActive){
                this.logActive ='grey'
                this.signActive = 'black'
            }else{
                this.logActive
            }
            this.$router.push({path:'/login'})
                
                 
        },
    //     toggleClass: function(event){
    //    // Check value
    //    if(this.isActive){
    //      this.isActive = true;
    //    }else{
    //      this.isActive = false;
    //    }

    // }
    }

}
</script>

<style>
#formhead{
    background-color: black;
    height:50px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color:black;
    font-size: 20px;
    font-weight:200;
    font-family: 'Times New Roman', Times, serif;
    color: white;
}
#sign-up{
    /* background-color: aqua; */
    height:50px;
    padding-left:100px;
    padding-top:10px;
    border-top-left-radius: 10px;
}
#login{
    /* background-color: blueviolet; */
    height:50px;
    padding-left:100px;
    padding-top:10px;
    border-top-right-radius: 10px;
    
}
.button{
    width:50%;
    float:left;
    color:white;
    cursor:pointer;
    background-color: black;
}
/* .black{
    background-color: black;
    width:50%;
    float:left;
    cursor:pointer;
}
.grey{
    background-color: gray;
    width:50%;
    float:left;
    cursor:pointer;
} */


</style>