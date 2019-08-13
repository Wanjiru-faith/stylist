<template>
<div>

    <div class ="filter-page" 
    :style="{ backgroundImage: `url(${currentImage})`  }" >

    <!-- <div id="text">
    <h3  style="font-size:50px; padding-left:50px;">Welcome to Msusi</h3>
    <h2 style="">Book Your Hair Stylist with Ease</h2><br>
    <h4 style="font-size:20px; padding-left:30px">Choose who will make you stylish <br>based on your experience <br>and the experience of others</h4>
    </div> -->
    
    <div class="flex-container" id="filter">
        
         <div class="seeLeft">
     <a class="prev" @click.prevent="goBack">&#10094;</a>
     <!-- <div style="color:white; display:none">
         {{datePicked}}
     </div> -->
     <a class="next" @click.prevent="goNext">&#10095;</a>
     </div>  

    <div class="select-location">
        <select class="classic" v-model="filter.selectedLocation" >
        <option value="" disabled selected="selected" data-default>Location</option>
        <option class="items" v-for ="location in locations"
         :value="location.id" 
         :key="location.id" 
         placeholder="Locations"
         >
            {{location.town}}     
            </option> 
            
        </select>
        
         
    </div>    

    <div class="select-location">
        
    <select class="classic" v-model="filter.selectedHairstyle">
        <option value="" disabled selected="selected" data-default>Hairstyle</option>
        <option v-for ="hairstyle in hairstyles" 
        :value="hairstyle" 
        :key="hairstyle.id" placeholder="Hairstyle"
        @blur="hairstyle.$touch()"
         >
            {{hairstyle.style}}
        </option>
    </select>
   
    </div>
    
     
     <strong><i class='far fa-calendar-alt' aria-hidden="true"></i></strong>

     <div class="select-locationcal">  
         <span id="calenderInput">
             <input placeholder="Date:"  id="datepicker" v-model="filter.datePicked" type="date" class="far fa-calendar-alt" >
             
         </span>
    </div>

    <div class="viewStylist">
        <button @click.prevent="submitButton" class="viewStylistText" >Stylists Availaable </button>
    </div>

    <!-- <div class="errorMessage">
            <p style="color:red">{{errors.location}}</p>
            <p style="color:red">{{errors.date}}</p>
            <p style="color:red">{{errors.hairstyle}}</p>
    </div> -->
    
    

    <!-- <div style="text-align:center" class="dots">
  <span class="dot" @click="currentSlide(1)"></span> 
  <span class="dot" @click="currentSlide(2)"></span> 
  <span class="dot" @click="currentSlide(3)"></span> 
</div> 
 <p v-if="!this.location" style="padding-top:10px; color:red;">Please Identify the style you would like done!</p> -->
    </div>
    
    
    
</div>
</div>
    
</template>

<script>  
import { setTimeout, setInterval } from 'timers';
// import { required } from 'vuelidate/lib/validators'

import images from '../assets'

export default {
    created(){
        setInterval(this.nextImage,8000)
    },
    
  data(){
    return{
           
        images:[require("../assets/bg1.jpg"), require("../assets/bg6.jpg"), require("../assets/bg3.jpg"), require("../assets/bg7.jpg") ],
        currentNumber:0,
        filter:{
                    selectedLocation:'',
                    selectedHairstyle:'',
                    datePicked: new Date().toISOString().slice(0,10),
        },


                    locations:[
            {id:0, town:'Kericho'},
            {id:1, town:'Nairobi'},
            {id:2,town:'Nakuru'},
            {id:3,town:'Mombasa'}
            
        ],
        
            hairstyles:[
            {id:0,style:'Dyeing'},
            {id:1,style:'Braids'}, 
            {id:2,style:'Weaving'},
            {id:3,style:'Dreads'} 
        ],
        

        
        submitted:false,
    }
    },  
        computed:{
            currentImage() {
                return this.images[this.currentNumber]
            },
            length(){
                return this.images.length
            },
           
            isLastImage(){
        return this.currentNumber === this.length 
            },
            isFirstImage(){
                return this.currentNumber > this.length
            }
        },


    methods:{ 

        goBack(){
            console.log(this.currentImage)
            this.prevImage()

        },

        
        goNext () {
            console.log(this.currentImage)
            
            
                this.nextImage() 

        },
        
        nextImage: function (){
             this.currentNumber += 1 // the next function increments the currentNumber
             if(this.isLastImage){
                 this.currentNumber = 0
                 
             }

        },
        prevImage: function() {

            this.currentNumber -=1
            if(this.isFirstNumber){
                this.currentNumber = 1
            }
 
        },
        submitButton(){
            // console.log(this.datePicked)
            // console.log(this.)
            // console.log(this.datePicked)
            if(this.filter.selectedLocation && this.filter.selectedHairstyle && this.filter.datePicked){
                

                 this.$router.push({path: 'booking'})
                //  this.$http.post('',this.filter)
                // .then(function(data){
                //      console.log(this.filter)
                //      // save filter id in store
                //      this.submitted = true; 

                //      });

            }else{
                
                    alert('please fill all the fields')
                }

                // !this.location ? this.errors.location ='' :this.errors.location ='Please select your location'
                // !this.hairstyle ? this.errors.hairstyle = '' :this.errors.hairstyle = 'Please select at least one hairstyle'
                // !this.date ? this.errors.date = '' :this.errors.date = 'You have not chosen a date'
            
            } 
      

        }
        
            
        
        
}
  
</script>

<style scoped lang="css">


.filter-page{
   background: auto;
   background: no-repeat center center fixed;
   position:inherit;
   margin-left:500px;
   margin-left:900px;
   height:100vh;
   font-family:Arial, Helvetica, sans-serif;
   margin: 0;
   padding:none;
   background-size: 300px 100px;
   top: 0;
   left: 0;
   min-width: 1024px;
   -webkit-background-size: cover;
   -moz-background-size: cover;
   -o-background-size: cover;
   }
   


h1{
    font-size:20px;
    font-weight:200;
    padding-top:20px;
    padding-left:20px;
}

.flex-container{
      display: flex;
      justify-content:center;
      align-items: center;
      padding:200px;
      
      padding-top:400px;
      flex-wrap: wrap; 
      position: fixed;   
}

.select-location select{
    background:transparent;
    color:black;
    font-weight:700;
    font-size: 20px;
    padding-right:50px;
    padding-left:10px;
    padding-top: 10px;
    width:30vh;
    outline:none;
    /* padding-top:20px; */

}


.select-location {
    padding-left:20px;
    border: purple solid;
    border-right: transparent;
    border-radius:3px;  
    height:7vh;
    border-radius:3px;
    outline:none; 
    
}
.select-locationcal{
    border: purple solid;
    border-right: transparent;
    border-radius:3px;  
    height:7vh;
    border-radius:3px;
    outline:none;
    font-weight:700;
    font-size: 17px; 

}
#text{
    padding-top:50px;
    padding-left:20px;
    color:blue;
    box-shadow: #717171;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
}


.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding-left: 16px;
  padding-right: 16px;
  margin: -5px;
  padding-bottom: 500px;
  padding-top: -100px;
  position: fixed;
  color: white;
  font-weight: bold;
  font-size: 50px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}
/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}
.prev {
  left: 0;
  border-radius: 3px 0 0 3px;
}
/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  /* background-color: grey;
  background-size: 10px; */

}
/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;

    
}
  
/* }
.dots{
    position:fixed;
    padding-top: 2000px;
} */
.active, .dot:hover {
  background-color: #717171;
}
.dots{
    padding-left:500px;
    padding-right:500px;
    padding-top:80px;

}


button{
    background-color:#008000;
    color:white;
    height:7vh;
    border:none;
    border-radius:3px;
    outline: none;
    width:150px;
}
.viewStylistText{
    padding:10px;

}
::placeholder {
  color: black;
  opacity: 1; /* Firefox */
  font-size: 30px;
  
  
  
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
 color: black;
}

::-ms-input-placeholder { /* Microsoft Edge */
 color: black;
}
select::-ms-expand {
     display: block;
     -webkit-appearance: menu; }

/* select {
    -webkit-appearance: menulist !important; 
}
*/
.select-location {
	position: relative;	
}

.select-location:after {
	font-family: FontAwesome;
  	content: '\f107';
  	font-size: 23px;
    font-weight: 500;
  	position: absolute;
  	right: 20px;
  	color: blue;
  	pointer-events: none;
    padding-bottom: 3px;
    padding-top:10px;
}

input[type="date"] {
    position: relative;
    font-family: "Font Awesome 5 Free";
    content: "f073"
}
input[type="date"]:after {
    font-family: "Font Awesome 5 Free";
    font-size: 20px;
    font-weight: 1000; 
    content: "\f073";
    color: blue solid;
    padding-bottom:2px;
    height:7vh;
}

input{
    outline: none;
    color:black;
    

}
input[type="date"]:hover:before {
    color: #bf1400;
    font-weight:700;
    font-size: 17px; 
    height:20px;
    padding-left:10px;
    /* border: 1px solid blue; */
}



/* change color of symbol on hover */
input[type="date"]:hover:after {
    color: #bf1400;
    font-weight:700;
    font-size: 17px; 
    height:20px;
    padding-left:10px;
    /* border: 1px solid blue; */
}

/* make the native arrow invisible and stretch it over the whole field so you can click anywhere in the input field to trigger the native datepicker*/
input[type="date"]::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: auto;
    color: transparent;
    background: transparent;
    outline: none;
}

/* adjust increase/decrease button */
input[type="date"]::-webkit-inner-spin-button {
    z-index: 3;
    
}

 /* adjust clear button */
 input[type="date"]::-webkit-clear-button {
     z-index: 4;
     
 }
 .errorMessage{
     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
     font-size: 20px;
 }




     


</style>