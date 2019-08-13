<template>
    <div class="stylist-page">
        
        <div class="grid-container" >
            <div class="menu">
                
                <div class ="stylists">
                <div class=Image>
                <img :src="profile.imagePreview" >
                </div>
            
                <div class= "stylistInformation">
                <p style="float:left;">Name: {{profile.stylistName}}</p><br>
                <p style="float:left;"><rating/></p><br>
                <p style="float:left;"> Workplace: {{profile.workplace}}</p> <br>
                <p style="float:left;"> Description: {{profile.decription}} </p>
                <!-- {{$store.state.profile}} -->
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
    </div>
</template>

<script>
import Rating from "../components/rating.vue"
import { mapGetters, mapActions } from 'vuex';
import { mapState } from 'vuex'
import store from "../store"
export default {
    components:{
        Rating
    
  },
    data(){ 
    return{ 
        id:this.$route.params.id,
        profile:{},
        filter:{},
        table:{
            time:'',
            firstHour:'',
            secondHour:''
        },
        is_selected:true,
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
        ]

            
        
    }
    
  }, 
        // name:"stylists",
    // implement the mapGetters
    // computed:{
    //     stylists(){
    //     return this.$store.getters.allprofiles;
    //     }
    //     }, 
      created(){
        //   this.bookingStylist(id);
        console.log(this.$route.params)
        
        this.$http.get('https://matatu-booking.firebaseio.com/stylist-profile/posts/' + this.id + '.json')
        .then(function(data){
            return data.json();
        }).then(function(data){
            this.profile = data;
            console.log(data)
        })
    },

    methods: {
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
            

        }

    }  


}
</script>

<style scoped>
.selected{
    background-color: green !important ; 
    color:white;
    cursor: pointer;

}
.notSelected{
    background-color: black !important;
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
    width:690px;
    background-color:yellow;
    font-size:12px;
    margin-top:200px;
    margin-left:100px;
    font-weight:700; 
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





</style>
