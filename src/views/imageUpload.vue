<template>
    <div>
        <div class="imageUpload">
        <input type="file" @change="onFileSelected">
        </div>
    </div>
</template>

<script>
export default{
    data () {
        return{
            
        }
    },
    methods:{
        onFileSelected(event){
            console.lod(event)
        }
    }
}
//  (e) {
//         var files = e.target.files || e.dataTransfer.files
//         if (!files.length) {
//           return
//         }
//         this.createImage(files[0])
//       },
//       createImage(file) {
//         var reader = new FileReader()
//         var vm = this

//         reader.onload = (e) => {
//           vm.imagePreview = e.target.result
//         }
//         reader.readAsDataURL(file)
//       },
//        removeImage: function (e) {
//          this.imagePreview = ''
//        },

</script>