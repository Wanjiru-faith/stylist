<template>

  <div>
                  <label>Profile Picture:</label>
            <input type="file" name="myImage" accept="image/*" 
            style="display:none"
            ref="fileInput"
            @change="onFileSelected"/>

            <!-- <img :src="profile.selectedImage" width="220"> -->

            <button @click.prevent = "onUpload"> Upload </button>

  </div>
    
    
 
</template>

<script>
import axios from 'axios'



export default {
  components:{

    
  },

  data(){ 
    return{ 
        selectedImage:null,
        image:''

    }
  },
  methods:{
          onUpload() {
            this.$refs.fileInput.click()
            axios.post('my-domain.com/file-upload', this.selectedImage)
        },
        onFileSelected(event) {
            this.selectedImage = event.target.files[0]

            // const files = event.target.files;
            // let filename = files[0].name
            // if(filename.lastIndexOf('.') <= 0 ){
            //     return alert('Please add avalid file!')
            // }
            // const fileReader = new FileReader()
            // fileReader.addEventListener('load', () => {
            //     this.profile.selectedImage = fileReader.result

            // })
            // fileReader.readAsDataURL(files[0]
            // this.image = files[0]
        },
  }
}


</script>


<style lang="css" scoped>



</style>
