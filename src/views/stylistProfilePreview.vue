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
                <li v-for="service in profile.services"> {{service}} </li>
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
        created(){
            this.fetchStylistProfile();
            console.log()
        }
}        

</script>
