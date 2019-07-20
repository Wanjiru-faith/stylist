<template>
    <div class="stylist-page">
        
        <div class="grid-container" >
            <div class="menu">
                <div class ="stylists">
                <div class=Image>
                <img :src="profile.selectedImage" >
                </div>
            
                <div class= "stylistInformation">
                <p style="float:left;">Name: {{profile.stylistName}}</p>
                <p style="float:left;"><rating/></p>
                <p style="float:left;"> Workplace: {{profile.workplace}}</p> <br>
                <p style="float:left;"> Description: {{profile.decription}} </p>
                </div>
                </div>

            </div>
        

        <div class="main">
            <div class="bookButton">
                <button>Book Now</button>
            </div>
            <div class="filter-page">
                <div class="filter-information">Location:{{filter.selectedLocation}}</div><br>
                <div class="filter-information">Hairstyle:{{filter.selectedHairstyle}}</div><br>
                <div class="filter-information">Date:{{filter.datePicked}}</div>
            </div>

            <div class="filterInformation">

            </div>
            <div class="time-table">

            <table>
                <tr>
                    <th>TIME:</th>
                    <th>10PM - MIDNIGHT</th>
                    <th>MIDNIGHT - 2AM.</th>
                    <th>2AM. - 4AM.</th>
                    <th>4AM. - 6AM.</th>
                    <th>6AM. - 8AM.</th>
                    <th>8AM. - NOON</th>
                    <th>NOON - 2PM.</th>
                    <th>2PM. - 4PM.</th>
                    <th>4PM. - 6PM.</th>
                    <th>6PM. - 8PM.</th>
                    <th>8PM. - 10PM.</th>

                </tr>
                <tr>
                    <td>First Hour</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr>
                    <td>Second Hour</td>
                    <td></td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                </table>
                </div>

        </div> 
        </div>
    </div>
</template>

<script>
import Rating from "../components/rating.vue"
export default {
    components:{
        Rating
    
  },
    data(){ 
    return{ 
        id:this.$route.params.id,
        profile:{},
        filter:{},
        


    }
    
  }, 
      created(){

    },

    methods: {
        fetchProfile1() {
            let url = `https://matatu-booking.firebaseio.com/stylists-profiles/posts/${this.id}.json`
            return this.$http.get(url).then(function(data){
                return data.json();  
            })
        },
        fetchProfile2(){
            // read filter from store
             let url = `https://matatu-booking.firebaseio.com/stylists-profiles/posts/${this.id}.json`
             return this.$http.get(url).then(function(data){
            return data.json();
            console.log(data);

            })

        }

    }  


}
</script>

<style scoped>
.stylist-page{
    background-image: url("../assets/bg7.jpg");
    background-repeat:  no-repeat;
    background-position:   fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    margin: auto;
    height:100vh;
    
    
}
.menu { 
    grid-area: menu;
    
    height:100vh;
}
.main { 
    grid-area: main;
    background-color: white;
    opacity: 0.5;
    width:170%;
    height:100vh;
    
   
}


.grid-container {
  display: grid;
  grid-template-areas:
    'menu main main main main main';
  grid-gap:2px;
  padding-top: 70px;
  

}

.grid-container > div {
  
  text-align: center;
  font-size: 30px;
}
.stylists{
    border-radius:3px;  
    color:black;
    font-size:12px;
    display:block;
    width: 220px;
    
   
}
.bookButton{
    background-color: black ;
    opacity:1;
    border-radius:10px;
    width:150px;
    margin-right:1000px;
    margin-top:60px;
    padding:5px;
    margin-left:10px;
    color:azure;
}
.filter-page{
    
    padding:7px;
    margin-left:350px;
    border-radius:3px;
    width:500px;
    padding-left: 0;
    position:fixed;
    top:0;
    margin-top:100px;
 
    
}
.filter-information{
    padding:3px;
    margin-left:0;
    text-align: left;
    position:top;
}
.time-table{
    width:700px;
    background-color:yellow;
    font-size:12px;
    margin-top:200px;
    margin-left:100px;
}
table, th, td {
  border: 1px solid black;
}




</style>
