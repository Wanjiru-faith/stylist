<template>
    <div id="stylist-profile">
        <div class="flex-container">
        <h2> My profile </h2>
        <keep-alive>
            <form  enctype="multipart/form-data" v-if="!profile.submitted">
           <label>Upload Image {{profile.file}} </label>
            <div class="imageUpload">     
                <div class="image-preview" >
                    <img :src="profile.imagePreview" v-show="profile.showPreview" height="220" width="220">
                 </div>
                <input type="file" name="image" @change="onFileSelected" accept="image/*" 
                id="file"
                 ref="file" >
                  <!-- ref - creates a key that we can reference the js component and allow us whats been update -->
                <!-- <p>
                Drag your file(s) here to begin<br> or click to browse
                </p> -->
                <button @click="onUpload" >Upload</button>
            </div>
            <label>Name:</label>
            <!--lazy is an input modify-->
            <input type ="text"  v-model.lazy="profile.name" required/>
            <rating/>
            
            <label>Workplace</label>
            <textarea v-model.lazy="profile.workplace"></textarea>

            <label>Description</label>
            <textarea v-model.lazy="profile.description"></textarea>
 
            <div id="checkboxes">
                <div class="myServices">
                    <h2>My services:</h2>
                </div>
                
                <input type="checkbox" value="Braiding" v-model="profile.services"/>
                <label>Braiding</label><br>
                <input type="checkbox" value="Dreads" v-model="profile.services"/>
                <label>Dreads</label><br>
                <input type="checkbox" value="Pedicure and Manicure" v-model="profile.services"/>
                <label>Pedicure and Manicure</label><br>
                <input type="checkbox" value="Cornrows" v-model="profile.services"/>
                <label>Cornrows</label> <br>
                <input type="checkbox" value="Weaving" v-model="profile.services"/>
                <label>Weaving</label>
            </div>

            <!-- <label>Services</label>
            <select v-model="blog.genre">
           <option v-for="service in services">{{service}}</option>
           </select> -->
           <br>
           <div id="postBlog" >
           <button @click.prevent="postProfile" 
           :disabled="!this.profile"
           > Update Profile </button>
           </div>
        </form>

        </keep-alive>

    </div>
    <div class="timeCalender">
     <div class="datePicker"> 
         <h2>Choose the date to set your Timetable</h2>
         <strong><i class='far fa-calendar-alt' aria-hidden="true"></i></strong> 
         <span id="calenderInput">
             <input placeholder="Date:"  id="datepicker" v-model="datePicked" type="date" class="far fa-calendar-alt" >
         </span>
    </div>
                <div class="time-table">
                    <h2>The Timetable</h2>
                <div class="time-grids">
                    <div>Time</div>
                    <div>6AM.-8AM.</div>
                    <div>8AM. -10AM.</div>  
                    <div>10AM. - NOON</div>
                    <div>N00N - 2PM.</div>
                    <div>2PM. - 4PM.</div>  
                    <div>4PM. - 6PM.</div>
                    <div>6PM. - 8PM.</div>
                    <div>8PM - 10PM.</div>  
                    <div>10PM.- MIDNIGHT</div>
                    <div>MIDNIGHT - 2AM.</div>
                    <div>2AM. - 4AM.</div>
                    <div>4AM. - 6AM.</div>
                </div>
                
                <div class="first-hour">
                    <div>First Hour</div>
                    <div ref="firstHourTexts" :class="{'selected': text==='booked'}"  @click="changeColor(index)" v-for="(text,index) in firstHourTexts" :key="index">
                        {{ text }}         
                    </div>      
                </div>
                
                <div class="second-hour">
                <div>Second hour</div>
                    <div ref="secondHourTexts" :class="{'selected': text==='booked'}"  @click="changeColor1(index)" v-for="(text,index) in secondHourTexts" :key="index" selected>
                        {{ text }}
                    </div>
                </div>
        </div>
        </div> 
    </div>

</template>
    
<script>
import Swal from 'sweetalert2'
// import axios from 'axios'
import Rating from "../components/rating.vue"
// import imageUpload from "../views/imageUpload.vue"
import { mapActions } from 'vuex';
// import upload from '../assets';
import files from '../assets'
import imagePreview from '../assets'
export default {
    name:'stylistProfile',
    name: '',
    components:{
        Rating,
        // imageUpload
    },
    data(){
        return{
            registered:false,
            profile:{             
                file:'',        
                name:" ",     
                workplace:" ",     
                description:" ",   
                services:[],
                showPreview: false,
                imagePreview: '../assets',
                submitted:false,
            },
            datePicked: new Date().toISOString().slice(0,10),
            firstHourTexts:[
                'open',
                'open',
                'open',
                'open',
                'open',
                'open',
                'open',
                'open',
                'open',
                'open',
                'open',
                'open', 
            ],
            secondHourTexts:[
                'open',
                'open',
                'open',
                'open',
                'open',
                'open',
                'open',
                'open',
                'open',
                'open',
                'open',
                'open', 
            ],
            profiles:[]
        }
    },
   
    //fake jason server to store user inputs
    methods:{
        // ...mapActions(['addStylistProfile']),
        // ...mapActions(['fetchStylistProfile']),
       postProfile(){

    //   this.$v.form.$touch()
    //   if(!this.$v.form.$invalid && !this.$v.form.$error)
        
        console.log(this.profile)
        // this.profile.submitted = true
        console.log(this.profile.submitted)
        let profileData = {
            image: this.profile.imagePreview,
            name: this.profile.name,
            workplace: this.profile.workplace,
            description: this.profile.description,
            services: this.profile.services.join(','),     
            submitted: this.profile.submitted    
        }
        
        // let userId = response.body.stylist_profile.id;
        this.$http.post('http://localhost:3000/stylistprofile', profileData  
        )    
        .then(response => {
            localStorage.setItem('stylist_profile',JSON.stringify(response.data.stylist_profile))
            localStorage.setItem('jwt',response.data.token)

            if (localStorage.getItem('jwt') != null){//if user has an account already
                Swal.fire('title...', 'You already have an account!', 'warning')
                // if(localStorage.getItem('jwt') = null){//I need explanation!!!
                // }   
            }else{
                    return this.profile.submitted = false
                }
        })
        .catch(error => {
          console.error(error);  
        //   Swal.fire('title...', 'You already have an account!', 'warning')
        });
        // if(this.profile.submitted = true){
        //     let userId = response.body.stylist_profile.id;
        //     // this.$router.push(`stylistprofilepreview/${userId}`)
        // }
        console.log(this.profile)
        },
                changeColor(index){
            let vm = this;
            if(this.$refs.firstHourTexts[index].classList.contains('selected')) {
                this.$refs.firstHourTexts[index].classList.remove('selected');
                // Vue.set(this.texts, index, 'open');
                vm.firstHourTexts.splice(index, 1, 'open');
                // this.texts[index] = 'open';
            } else {
                this.$refs.firstHourTexts[index].classList.add('selected')
                // Vue.set(this.texts, index, 'booked');
                vm.firstHourTexts.splice(index, 1, 'booked');
                // this.texts[index] = 'booked';
            }
            // console.log(this.is_selected)
            // this.is_selected = !this.is_selected;
            // if(this.is_selected){
            //     this.text = 'booked';
            // }else{
            //     this.text = 'open';
            // }

        },
              changeColor1(index){
            let vm = this;
            if(this.$refs.secondHourTexts[index].classList.contains('selected')) {
                this.$refs.secondHourTexts[index].classList.remove('selected');
                // Vue.set(this.texts, index, 'open');
                vm.secondHourTexts.splice(index, 1, 'open');
                // this.texts[index] = 'open';
            } else {
                this.$refs.secondHourTexts[index].classList.add('selected')
                // Vue.set(this.texts, index, 'booked');
                vm.secondHourTexts.splice(index, 1, 'booked');
                // this.texts[index] = 'booked';
            }
            

        },
        onFileSelected(e){
            let fileReader = new FileReader();
            fileReader.readAsDataURL(e.target.files[0])
            fileReader.onload = e => {
                 this.profile.imagePreview = e.target.result
                //  this.profile.showPreview = true;
            }


            const file = this.$refs.file.files[0];
            this.profile.imagePreview = URL.createObjectURL(file);
            console.log(this.profile.imagePreview)
            //Set the local file variable to what the user has selected.
            this.file = this.$refs.file.files[0];
            //Initialize a File Reader object
            let reader  = new FileReader();
            /*
            Add an event listener to the reader that when the file
            has been loaded, we flag the show preview as true and set the
            image to be what was read from the reader.
            */
            reader.addEventListener("load", function () {
            // this.profile.showPreview = true;     
            this.profile.imagePreview = reader.result;
            }.bind(this), false);

            //Check to see if the file is not empty.
            if( this.file ){
            // Ensure the file is an image file.
                if ( /\.(jpe?g|png|gif)$/i.test( this.file.name ) ) {
                    /*
                    Fire the readAsDataURL method which will read the file in and
                    upon completion fire a 'load' event which we will listen to and
                    display the image in the preview.
                    */
                    reader.readAsDataURL( this.file );
                }
            }
        },
        onUpload(e){
            e.preventDefault();

            console.log(this.profile.imagePreview)
            let data = new FormData();
            data.append('file', this.profile.imagePreview, this.profile.imagePreview.data)
            var token = sessionStorage.getItem('token')
            const config= {
                hearders: {
                    'Content-Type' : 'multipart/form-data'
                }
            }
            this.$http.post( 'http://localhost:3000/assets?token=' + token, data, config)
            // Initialize the form data
            let formData = new FormData()
            //Add the form data we need to submit
            formData.append('file', this.file);
            //Make the request to the POST /single-file URL
            this.$http.post( 'http://localhost:3000/../assets',formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                }
            ).then(function(){
                console.log('SUCCESS!!');
            })
            .catch(function(){
                console.log('FAILURE!!');
            });
        },    
   

    },

}
 

</script>
<style scoped>
#stylist-profile{
    /* margin:20px auto; */
    padding-left:20px;
    background-image: url("../assets/bg2.jpg");
    background-repeat:  no-repeat;
    background-position:   fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    color:black;
    
}

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }


.myServices{
    padding-left:20px;
    margin-right: 400px;
    font-size:20px;
    
}
.flex-container{
    margin-right:500px;
}
.selected{
    background-color: green !important ; 
    color:white;
    cursor: pointer;
}
.stylist-page{
    background-image: url("../assets/bg7.jpg");
    background-repeat:  no-repeat;
    background-position:   fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    /* margin: auto; */
    height:100vh;
}
.timeCalender{
   position:absolute;
   top:0;
   right:0;
   margin-left:900px;
   padding-top:70px;
   
   padding-left: 5px;
   height:500px;
   margin-top:50px;


}
.datePicker{
    padding:20px;
    margin-top:10px;
    padding-left: 200px;
}
.time-table{
    width:690px;
    background-color:yellow;
    font-size:12px;
    margin-top:20px;
    margin-left:5px;
    font-weight:700; 
    margin-right:20px;
}
/* table, th, td {
  border: 1px solid black;
} */
.time-grids{
  display: flex;
  flex-wrap: wrap;
  background-color: DodgerBlue;

}
.time-grids > div {
  background-color: #f1f1f1;
  width: 51px;
  margin: 1px;
  text-align: center;
  /* line-height: 20px; */
  font-size: 10px;
}
.first-hour{
  display: flex;
  flex-wrap: wrap;
  background-color: DodgerBlue;
  height:40px;
 

}
.first-hour > div {
  background-color: #f1f1f1;
  opacity:0.8;
  width: 51px;
  margin: 1px;
  /* text-align: center; */
  /* line-height: 20px; */
  font-size: 10px;
  height:35px;
  cursor: pointer;
}
.second-hour{
  display: flex;
  flex-wrap: wrap;
  background-color: DodgerBlue;
  

}
.second-hour > div {
  background-color: #f1f1f1;
  opacity: 0.8;
  width: 51px;
  margin: 1px;
  text-align: center;
  font-size: 10px;
  cursor: pointer;
}
input[type="text"], textarea{
    display:block;
    width:50%;
    padding:8px;
    border: 2px solid purple;
    border-radius: 4px;
    background-color: transparent;
    
} 
label{
    display:block;
    margin:20px 0 10px;
}

#previewBlog{
    border:2px purple #ccc;
    border: 5px solid;
    border-radius:3px;
    padding: 10px;
    margin:30px 0;
    color:black;
    font-size: 20px;
    min-width: 300px;
    max-width: 400px;
    margin-top:50px;
    height:500px;
    
}
h3{
    margin-top:5px;
    padding:10px;
}
h4{
    padding:10px;
}
#checkboxes input{
    margin-right:10px;
    display:inline-block;
   
}
#checkboxes label{
    display:inline-block;
    font-size:20px;
}
#postBlog{
  padding-left:150px;
  padding:20px;


}
button{
    margin:2px;
    color:black;
    background: grey;
    outline:none;
    display:block;
    border-radius:3px;
    cursor: pointer;
    
}
button:hover{
    cursor:pointer;
}
#thanksMessage{
    color:Purple;

}
</style>

