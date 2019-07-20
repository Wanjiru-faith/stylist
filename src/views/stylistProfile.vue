<template>
    <div id="stylist-profile">
        <div class="flex-container">
        <h2> My profile </h2>

        <form v-if="!submitted">


            <label>Name:</label>
            <!--lazy is an input modify-->
            <input type ="text"  v-model.lazy="profile.stylistName" required/>
            <rating/>
            
            <label>Workplace</label>
            <textarea v-model.lazy="profile.workplace"></textarea>

            <label>Description</label>
            <textarea v-model.lazy="profile.description"></textarea>
 
            <div id="checkboxes">
                <p>My services:</p>
            <input type="checkbox" value="Braiding" v-model="profile.services"/>
            <label>Braiding</label>
            <input type="checkbox" value="Dreads" v-model="profile.services"/>
            <label>Dreads</label>
            <input type="checkbox" value="Pedicure and Manicure" v-model="profile.services"/>
            <label>Pedicure and Manicure</label>
            <input type="checkbox" value="Cornrows" v-model="profile.services"/>
            <label>Cornrows</label> 
            <input type="checkbox" value="Weaving" v-model="profile.services"/>
            <label>Weaving</label>
            </div>

            <!-- <label>Services</label>
            <select v-model="blog.genre">
           <option v-for="service in services">{{service}}</option>
           </select> -->
           <br>
           <div id="postBlog" >
           <button @click.prevent="postProfile" :disabled="!this.profile"> Update Profile </button>
           </div>
        </form>

        <div id="thanksMessage" v-if="submitted"> 
        <h3>Thanks for adding your post!!</h3>
        </div>
  
        <div id="previewBlog">
             
                 <h3>Your profile preview</h3>

            <div class="profileImage"> 
                <img :src="profile.selectedImage" height="220" width="220">
            </div>
            <div class= "stylistInformation">
            <h4>Name: {{profile.stylistName}}</h4>
        <h4><rating/></h4>
        <h4>Workplace: {{profile.workplace}}</h4>
        <h4>Description: {{profile.description}}</h4>
       

        <h4>My Services:</h4>
        <ul>
        <li v-for="service in profile.services"> {{service}} </li>
        </ul>
           
        </div>

        </div>

    </div>
    </div>

</template>
    
<script>
import axios from 'axios'
import Rating from "../components/rating.vue"
import imageUpload from "../views/imageUpload.vue"
import { mapActions } from 'vuex';
// import upload from '../assets';
export default {
    name:'stylistProfile',
    components:{
        Rating,
        imageUpload

    },

    data(){
        return{
            profile:{
            
            stylistName:" ",
            workplace:" ",
            description:" ",
            services:[],
            
            
            },
            submitted:false,
        }
    },
    //fake jason server to store user inputs
    methods:{
    //     ...mapActions(['addStylistProfile']),
    //    postProfile(e){
    //         e.preventDefault();
    //         //call addTodo function
    //         this.addStylistProfile(profile)
    //     }
   
            
        
        postProfile (){
            
            // this.$http.post('https://matatu-booking.firebaseio.com/stylist-profile/posts.json',this.profile).then(function(data){
            //     console.log(data);

            //     this.submitted = true;
            // });
            let profile = this.profile
            // console.log(profile)
            this.$store.dispatch('addStylistProfile',{ profile })
            // this.addStylistProfile(this.profile)
        },
    }
     
    
}
 

</script>
<style scoped>
#stylist-profile{
    margin:20px auto;
    padding-left:200px;
    background-image: url("../assets/bg2.jpg");
    background-repeat:  no-repeat;
    background-position:   fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    color:black;
    
}
/* .flex-container{
    display: flex;
    justify-content:center;
    align-items: center;
     

} */
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
    border:1px saddlebrown #ccc;
    border: 1px solid;
    padding: 10px;
    box-shadow: 5px 10px #888888;
    margin:30px 0;
    color:white;
    font-size: 20px;
    max-width: 700px;
    
}
h3{
    margin-top:10px;
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

