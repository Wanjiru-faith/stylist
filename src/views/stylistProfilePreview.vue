<template>
<div>
            <div id="previewBlog">

            <div id="thanksMessage" v-if="submitted" > 
                <h3>Thanks for adding your post!!</h3>
            </div>
                <h3>Your profile preview</h3>
            <div class="profileImage"> 
                <h4>Image</h4><br>
                <img :src="profile.imagePreview" height="220" width="220">
            </div>
            <div class= "stylistInformation">
                <h4>Name: {{profile.stylistName}}</h4>
                <h4><rating/></h4>
                <h4>Workplace: {{profile.workplace}}</h4>
                <h4>Description: {{profile.description}}</h4>
            
                <h4>My Services:</h4>
                <ul>   
                <li v-for="service in profile.services" :key="service"> {{service}} </li>
                </ul>
                <div id="editDelete" v-if="submitted" > 
                    <button>EDIT</button>
                    <button>DELETE</button>
                </div>
           
        </div>

        </div>
</div>

</template>
<script>
export default {
    data(){
        return{
            profile:{}
        }
    },
                  created(){
              console.log(this.$route.params.id)
            //   console.log(profileData)
                // if(this.profile.submitted = true && localStorage.getItem('jwt') != null){
                    this.$http.get('http://localhost:3000/stylistprofile/' + this.$route.params.id)
                    .then(function(data){
                    return data.json();
                    localStorage.setItem('stylist_profile',JSON.stringify(response.data.stylist_profile))
                    localStorage.setItem('jwt',response.data.token)
                    if (localStorage.getItem('jwt') != null){
                        this.submitted = true  
                    }else{
                        this.submitted =  false;
                    } 
                    })
            .then(response => {
                let profileObject = {
                image: response.data.stylist_profile.image,
                name: response.data.stylist_profile.name,
                workplace: response.data.stylist_profile.workplace,
                description: response.data.stylist_profile.description,
                services: response.data.stylist_profile.services.split(','),
                submitted: response.data.stylist_profile.submitted
                }

                    console.log(profileObject.name)
            })
            // }else{
            //     this.$router.push(`stylistprofile/${userId}`)
            // }        
        }
}        

</script>
<style>

</style>
