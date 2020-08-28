<template>
    <div id="stylist-profile">
        <div class="flex-container">
            <div class="top-text">
                <h2> Create your hairstylist profile </h2>
                <div><br>Customers can view your information 
                <br>and easily connect with you</div>
            </div>
       
        <keep-alive>
            
            <form  enctype="multipart/form-data" v-if="!profile.submitted">
            <div class="container">
            <div class="imageUpload">
                <div class="myServices">
                <label><h2>Upload Image {{profile.file}}</h2> </label>
                </div>
                <div class="image-preview" >
                    <img :src="profile.imagePreview" v-show="profile.showPreview" 
                    height="300" width="300">
                 
                <input type="file" name="image" @change="onFileSelected" accept="image/*" 
                id="file"
                 ref="file" >
                  <!-- ref - creates a key that we can reference the js component and allow us whats been update -->
                <!-- <p>
                Drag your file(s) here to begin<br> or click to browse
                </p> -->
                </div>
                <button @click="onUpload" >Upload</button>
            </div>

            
                <div class="imageUpload">
                    <div class="myServices">
                        <h2>Fill required information:</h2>
                    </div>
                    <div class="stylist-infor1">
                        <!--lazy is an input modify-->
                        <input placeholder ="Name" type ="text"  v-model.lazy="profile.name" required/>
                    </div>
                    <div class="stylist-infor1">
                        <input placeholder="Contacts: 0712345678" v-model.lazy="profile.contacts">
                    </div>
                    <div class="stylist-infor1">
                        <input placeholder="workplace" v-model.lazy="profile.workplace">
                    </div>
                </div>
                </div>

                <div class="container">
            <div class="desc">
                <div class="myServices">
                    <h2>Description</h2>
                </div>
            <textarea v-model.lazy="profile.description"></textarea>
            </div>
            <div class="desc">
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

                <div class="desc" id="desc-check">
                <input type="checkbox" value="Braiding" v-model="profile.services"/>
                <label>Wigs</label><br>
                <input type="checkbox" value="Dreads" v-model="profile.services"/>
                <label>Dyeing</label><br>
                <input type="checkbox" value="Pedicure and Manicure" v-model="profile.services"/>
                <label>Make-up</label><br>
                <input type="checkbox" value="Cornrows" v-model="profile.services"/>
                <label>Bantu knots</label><br>
                <input type="checkbox" value="Cornrows" v-model="profile.services"/>
                <label>Natural hair</label> <br>
                <input type="checkbox" value="Weaving" v-model="profile.services"/>
                <label>Shaving and trimming</label>
           <br>
           <div class="postBlog" >
           <button @click.prevent="postProfile" 
           :disabled="!this.profile"
           > Update Profile </button>
           </div>
            </div>
             </div>
        </form>

        </keep-alive>

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
                name:"",     
                workplace:"",     
                description:"",   
                services:['Cornrows','Weaving'],
                showPreview: false,
                imagePreview: '../assets/profile2.jpg',
                // imagePreview: '../assets',
                submitted:false,
                user_id:0
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
   created(){
       

       console.log(this.$route.params.id)
            this.$http.get('http://localhost:3000/stylistprofile/' + this.$route.params.id)
            .then(function(data){
            return data.json();
            console.log(data)
            })
            .then(response => {
                // let userId= this.$route.params.id
                // localStorage.setItem('stylist_profile',JSON.stringify(response.data.stylist_profile))
                // localStorage.setItem('jwt',response.data.token)
            if (localStorage.getItem('jwt') != null){
             var userId = this.$route.params.id;
                // this.$router.push(`/stylistProfilePreview/${userId}`) 
            }
                // let profileObject = {
                // image: response.data.stylist_profile.image,
                // name: response.data.stylist_profile.name,
                // workplace: response.data.stylist_profile.workplace,
                // description: response.data.stylist_profile.description,
                // services: response.data.stylist_profile.services.split(','),
                // submitted: response.data.stylist_profile.submitted,
                // user_id: response.data.stylist_profile.user_id
                // }
                this.$router.push(`/stylistProfilePreview/${userId}`) 
                    console.log(profileObject.name)
            })   
            .catch(error =>{
                if(error.status = 401){
                //    let userId = this.$route.params.id;
                //     this.$router.push(`/stylistprofile/${userId}`)
                console.log('hiii')
                }
                if(error.status = 500){
                    console.log(error)
                }
            })
},
   
   
   
    //fake jason server to store user inputs
    methods:{
        // ...mapActions(['addStylistProfile']),
        // ...mapActions(['fetchStylistProfile']),
       postProfile(){
        console.log(this.profile)
        this.profile.submitted = true
        console.log(this.profile.submitted)
        let profileData = {
            image: this.profile.imagePreview,
            name: this.profile.name,
            workplace: this.profile.workplace,
            description: this.profile.description,
            services: this.profile.services.join(','),     
            submitted: this.profile.submitted,
            user_id: this.$route.params.id  
        }
        
        // let userId = response.body.stylist_profile.id;
        this.$http.post('http://localhost:3000/stylistprofile', profileData  
        
        )    
        .then(response => {
            localStorage.setItem('stylist_profile',JSON.stringify(response.data.stylist_profile))
            localStorage.setItem('jwt',response.data.token)

            if (this.profile.submitted = true){//if user has an account already
                // Swal.fire('title...', 'You already have an account!', 'warning')
                this.$router.push({path:'/stylistProfilePreview/' + this.$route.params.id})  
                return this.profile.submitted = true
            }
        })
        .catch(error => {
            if(error.status == 500) {
                console.error(error);
            }
            
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
    /* background-image: url("../assets/bg2.jpg"); */
    background-color: rgb(12, 12, 12);
    background-image: radial-gradient(circle,black, rgb(43, 40, 40), black);
    /* background-repeat:  no-repeat;
    background-position:   fixed; */
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    color:white;
}
.top-text{
    width:100%;
    padding:30px;
    text-align: center;
    margin-top:50px;
}
.container{
    display:inline-flex;
    margin:10px;
}
.myServices{
    background-color: black;
    width:100%;
}
.imageUpload{
    
    background-color: rgb(211, 198, 13);
    padding:10px;
    margin: 5px;
    width:50%;
}
.imageUpload input{
    width:100%;
    height:45px;
    border:black solid 2px;
    border-radius: 10px;
    background-color: aliceblue;
}
.desc{
    /* background-color:purple; */
    padding:10px;
    margin: 5px;
    width:33%;  
    font-size:15px; 
}
.desc textarea{
    width:370px;
    height:200px;
    background-color: white;
    border:rgb(42, 1, 46) solid 4px;
    border-radius: 4px;
}
.desc input{
    margin:15px;

}
#desc-check{
    padding-top: 50px;
}
.stylist-infor1{
    padding:20px;
    margin:10px;
    font-size: 15px;
}
.image-preview{
    /* background-color: blue; */
    /* margin-left:30px; */
    height:300px;
    width:300px;
}
.stylist-infor{
    background-color: brown;
}
.postBlog{
    /* background-color: rgb(160, 177, 11); */
    margin-left:300px;
    padding:3px;
    margin-top:30px;
}
button{
    background-color: rgb(35, 1, 54);
    border-radius:20px;
    width:150px;
    height:30px;
}

</style>

