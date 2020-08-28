<template>
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
</template>
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
    padding: 100px;
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
