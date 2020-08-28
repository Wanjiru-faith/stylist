
<template>
<div id="body"> 
<div id ="image-side">
  <div class="login">
    <i @click="signup" class="sign-up"> Sign-up</i>
    <i @click="login" class="sign-in">Login</i>
  </div>
  <img class="image" src= "../assets/bg2.jpg">
  <div class="menu-icon">
    <i class="fa fa-bars" aria-hidden="true">
      <p class="menu">Menu</p>
    </i>
      <div class ="company">
      <div class="centered-text"> WASUSI <p>Inc.</p></div>
      <div class="description"><div class= "tee"> T</div>
      <div class="desc">he latest, most convinient 
      <br>and fastest way 
      <br>to book your hairstylist
      </div>
      </div>
      </div>
</div>
</div>
<div class="booking-flow">
<div class="text">
  <p class="title">Wasusi Benefits</p>
  <p class="title1">Wasusi is a Kenyan leading site where customers can easily search, find and book hairstylists</p>
  <p class="title2">The platform facilitates convinient intergration 
    of hairstylists and their clients based on their location, expertise and availability,
    <br>
     it allows customers to find the appropriate hairstylists to provide the desired 
     haircare services</p>
</div>
<div class="benefits-container">
  <div class="ben">
    ENJOY CONVINIENCE
  </div>
  <div class="ben">
    GET HAIRSTYLIST WORK INFORMATION
  </div>
    <div class="ben">
      EDUCATIVE BLOGS ON BEAUTY AND HAIRCARE
  </div>
    <div class="ben">
      FLEXIBLE PAYMENTS
  </div>
</div>

<div class="slide-img">
  <div class="slide-text">
    <p>View the latest trending hairstyles</p>
    <br>
    <div class="slide-msg">The images contain information on the hairstylist who worked on them, their location and price</div>
    </div>
<div class="slides" v-for="number in [currentNumber]" transition="fade">
       <img :src = "images[Math.abs(currentNumber) % images.length]"/>
       </div>
<div class="slides" v-for="number in [currentNumber1]" transition="fade">
       <img :src = "images[Math.abs(currentNumber1) % images.length]"/>
       </div>
<div class="slides" v-for="number in [currentNumber2]" transition="fade">
       <img :src = "images[Math.abs(currentNumber2) % images.length]"/>
       </div>
<div class="slides" v-for="number in [currentNumber3]" transition="fade">
       <img :src = "images[Math.abs(currentNumber3) % images.length]"/>
       </div>
       
       
  <div class="seeLeft">
            <a class="prev" @click.prevent="prev">&#10094;</a>
            <a class="next" @click.prevent="next">&#10095;</a>
        </div>
       </div> 

<div class ="services">
<p>A solution for every hair-need </p>
<div class="service-links">
<i><u>Find hairstylist</u></i>
<i><u>Market your work</u></i>
<i><u>Book hairstylists</u></i>
<i><u>Manage appointments</u></i>
</div>
</div>

<div class ="footer">
<div class="footer-part">
  <div>
    <img class="logo-img" src="../assets/logo.png">
     <div class="logo-text"><b>W</b>ASUSI</div>
  </div>
  <!-- <div class="logo-text"> -->
    <div class="f-menu">The latest,</div> 
    <div class="f-menu">most convinient and </div> 
    <div class="f-menu">fastest way to book your hairstylist!</div>
  <!-- </div> -->
</div>
<div class="footer-part">
  <div class="f-menu"><b>Menu:</b><br></div>
 <div class="f-menu"><i >Home</i><br></div> 
  <div class="f-menu"><i>Services</i><br></div> 
  <div class="f-menu"><i> About Us</i><br></div> 
  <div class="f-menu"><i>News and Blogs</i><br></div> 
  <div class="f-menu"><i>Contact Us</i></div> 
   </div>
   <div class="footer-part">
     <div class="work">
     <div class="f-menu"><b>Contacts:</b><br></div>
     <div class="f-menu">Phone:+254792935903<br></div> 
     <div class="f-menu">Email:wanjirufaith83@gmail.com<br></div> 
     <div class="f-menu"><img class="facebook">wasusi_inc<br></div> 
     <div class="f-menu"><img class="instagram">Wasusi_inc<br></div> 
     <div class="f-menu"><img class="twitter">wasusiInc</div> 
     </div>
   </div>
   <div class="footer-part">
     <div class="f-menu"><b>NewsLetter</b><br></div>
    <div class="f-menu"> <div>Sign up to our newsletter to get the latest offers,
      news and trendy styles straight to your inbox!</div></div>
     <div class="f-input"><b>Enter your email or phone number:</b></div>
     <div class="f-input"><input></div>
     <div class="f-button"><button>Submit</button></div>
   </div>
</div>
<div class="top">
</div>
<div class="rights"> <img class="right-icon">2019-2020, Wasusi Inc.</div>
</div>
</div>
</template>
<script>
import VueGallerySlideshow from 'vue-gallery-slideshow'
import { setTimeout, setInterval } from 'timers';
import images from '../assets'
export default {
  created(){
        setInterval(this.next,5000)
    },
  components:{
    VueGallerySlideshow
  },
  data(){
    return{
      images:[require("../assets/slide1.png"), require("../assets/slide2.png"), require("../assets/slide3.png"), require("../assets/slide4.png"), 
      require("../assets/slide5.png"), require("../assets/slide6.jpg"), require("../assets/slide7.jpg"), require("../assets/slide8.jpg")],
      currentNumber:0,
      currentNumber1:1,
      currentNumber2:2,
      currentNumber3:3,
      timer: null
    }
  },
  computed:{
    created(){
        setInterval(this.nextImage,15000)
    }

        },
  methods:{
    startRotation(){
      this.timer = setInterval.next,8000
    },
    next(){
      this.currentNumber+=1
      this.currentNumber1+=1
      this.currentNumber2+=1
      this.currentNumber3+=1
    },
    prev: function() {
            this.currentNumber -= 1
            this.currentNumber1-=1
            this.currentNumber2-=1
            this.currentNumber3-=1
        },
    signup(){
      this.$router.push({path:'/sign-up'})
    },
    login(){
      this.$router.push({path:'/login'})
    },
    onClick(i){
      this.index = i
    }
  }
    
}  
</script>
<style scoped>

#body{
    /* background-color: rgba(2, 109, 202, 0.44);   */

     /* background-color: rgb(70, 4, 77);    */
     background-color: rgb(43, 2, 43);   
}
.booking-flow{
  height:100vh;
  background-color:black;
  color:white;
  position: relative;
}
.rights{
  background-color: black;
  color:white;
  height:6vh;
  width:100%;
  padding-left:500px;
}
.footer{
  background-color: bisque;;
  color:black;
    display: flex;
  flex-wrap: nowrap;
  font-size: 20px;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.footer-part{
    /* padding-right:5px;
    padding-left:5px; */
    padding-top: 10px;
    width:250vh;
    height:50vh;
    margin-right:20px;
    background-color: bisque;
}
.logo{
  padding:10px; 
}

.logo-img{
  width:100px;
  height:100px;
  /* background-color:brown; */
  margin-right: 10px;
}
.logo-text{
  padding-left:130px;
  margin-top:-70px;
  margin-bottom: 50px;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  font-size: 30px;
  /* background-color: brown; */

}
.logo-text b{
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  font-size: 40px;
  font-weight: 500;
  /* background-color: blueviolet; */
}
.f-menu{
  padding-left:55px;
  padding-top:7px;
  margin:5px;
  color:black;
}
.f-menu div{
  margin-left:-25px;
}
.f-input{
  height:30px;
  width:250px;
  margin-left:20px;
  margin-bottom:15px;
  color:black;
  padding:10px;
}
.f-input input{
  height:35px;
  outline: colorless;
  border:black solid 3px;
  border-radius: 10px;
}

.f-button{
  /* background-color: orange; */
  height:10px;
  width:100px;
  margin-left:70px;
  padding:20px;
}
.f-button button{
  border:orange solid 2px;
  background-color: orange;
  height:40px;
  width:90px;
  border-radius: 10px;
}
.services{
 /* background-color: rgb(43, 2, 43);   */
 background-color: black;
 color:white;
 margin-top:100px;
 padding:80px;
 position: relative;
}
.services p{
  color:white;
  font-size: 25px;
  position: absolute;
  margin-left:350px;
}
.service-links{
  margin-left:250px;
  font-size: 15px;
}
.services i{
  margin-left:10px;
}
.image{
  width:800px;
  height:90vh;
  position: -webkit-sticky;
  position: sticky;
  top:0;
  bottom: 0;
  opacity:0.5;
  /* box-shadow: 10px 10px 7px rgb(179, 127, 31); */

}

.slides {
  width: 25%;
  display: inline-block;
  max-height: 200px;
  min-height: 200px;
  border-radius: 10px;
}
.slides img{
  background-color:rgb(10, 0, 10);
  width: 99.5%;
  max-height: 300px;
  min-height: 300px;
}
.slide-img{
  position: relative;
  background-color: black;  
  color:white;
}

.slide-text{
  padding:40px;
  /* background-color:rgb(43, 2, 43);   */
  background-color: black;
  color:white;
}
.slide-text p{
  color:white;
  margin-left:390px;
  font-size: 25px;
  font-style:italic;
}
.slide-msg{
  font-size:15px;
  margin-left:300px;
}
.next {
  position:absolute;
  right: 0;
  border-radius: 3px 0 0 3px;
  bottom:0px;
}
.prev {
  position: absolute;
  left: 0;
  border-radius: 3px 0 0 3px;
}
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: 80px;
  font-weight: bold;
  font-size: 50px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}
.menu-icon{
  position:absolute;
  top: 8px;
  left: 18px;
  font-size: 40px;
}
p{
  top: 18px;
  padding-left:50px;
  /* padding-top: 0px; */
  position:absolute;
}
.centered-text{ 
  padding-top:200px;
  padding-left:625px;
  font-size:35px;
  color:black;
  font-family: Saira ExtraCondensed;
}
.centered-text p{
  color:cornsilk;
  padding-top:183px;
  padding-left:160px;
}
.description{
  /* background-color: brown; */
  font-size:15px;
  padding-left:800px;
  padding-top:50px;
  color:white;
  font-family:monospace;
  font-style: italic;
  /* background-color: aqua; */
  margin:2px;
}
.tee{
  font-size: 30px;
  /* background-color: brown; */
  padding-bottom: 25px;
  position: absolute;
}
.desc{
  padding-left:25px;
  margin-top: 1px;
  position:absolute;
  /* background-color: palevioletred; */
  padding-right: 200px;
}
.login{
  font-size:25px;
  top:40px;
  right:0px;
  position: fixed;
  color: white;
  padding-right:30px;
}
.sign-up{
  background-color: white;
  color: black;
  margin-right:30px;
}
.sign-in{
border: 0.7px white solid;
}
.fa{
  position: fixed;
  color:white;
}
.menu{
  position: fixed;
  color:white;
}
i{
  padding:7px;
  cursor: pointer;
  border-radius:10px;
}
.active, i:hover{
  color: blueviolet;
}

.text{
  padding:70px;
  color:white;
  margin-left:150px;
}
.text p{
  color: white;
}
.title{
  padding:20px;
  font-size: 100px;
  margin-left: 350px;
}
.title1{
  padding-top:50px;
  margin-left:100px;
}
.title2{
  padding-top:70px;
  margin-left:0px;
}
.benefits-container{
 display: grid;
 grid-template-columns: auto auto;
 padding:10px;
 background-color:black;
}
.ben{
  padding:30px;
  margin: 20px;
  background-color: rgb(59, 54, 2);
  max-width:500px;
  min-width:500px;
  max-height:200px;
  min-height:200px;
  border-radius: 3px;
  /* box-shadow: blue solid 30px; */
  /* box-shadow: 10px 10px 7px rgb(179, 127, 31);  */
}

</style>