<template>
<footer>
<p> {{copyright}} {{title}}</p>
</footer>
  
</template>

<script>


export default {
    props:{
        title:{
            type:String
        }
    },
  
  data(){
    return{
        copyright:'Copyright 2017 Melanini254'
     
    }
  },


}

</script>

<style>
footer{
background:white;
padding:6px;
position:inherit;
height: 90px;
}
p{
    color:black;
    text-align:center;
}

</style>