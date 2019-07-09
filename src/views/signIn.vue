<template>
<div id ="form" >
  
  <div class="flex-container">
  <div class="signinForm">
    <div class="sub-heading"> <h2> Sign-in</h2>
    </div>
    
<form @submit.prevent="submitForm" autocomplete="off" >
<div class="form-group">
<label for="name">First Name:</label>
<input v-model="form.firstName"
@blur="$v.form.firstName.$touch()" 
:class ="{error: shouldAppendErrorClass($v.form.firstName), valid: shouldAppendValidClass($v.form.firstName)}"
id="name">
<!--input event handler:@input = "$v.form.name.$touch()"
$error === $invalid && $dirty
$invalid  && $v.form.name.$invalid"
-->
<p v-if="$v.form.firstName.$error" class="error-message">You have not entered your name</p>
<!-- <p>Invalid: {{$v.form.firstName.$invalid}} | Dirty: {{$v.form.firstName.$dirty}}</p> -->

</div>

<div class="form-group">
<label for="name">Second  Name:</label>
<input v-model="form.secondName"
@blur="$v.form.secondName.$touch()" 
:class ="{error: shouldAppendErrorClass($v.form.secondName), valid: shouldAppendValidClass($v.form.secondName)}"
id="name">
<!--input event handler:@input = "$v.form.name.$touch()"
$error === $invalid && $dirty
$invalid  && $v.form.name.$invalid"
-->
<p v-if="$v.form.secondName.$error" class="error-message">You have not entered your name</p>
<!-- <p>Invalid: {{$v.form.secondName.$invalid}} | Dirty: {{$v.form.secondName.$dirty}}</p> -->

</div>

<div class ="form-group">
<label for="email">Email or Phone-number:</label>
<input v-model="form.email"
  @blur="$v.form.email.$touch()" 
  :class ="{error: shouldAppendErrorClass($v.form.email), valid: shouldAppendValidClass($v.form.email)}"
  id="name">
  <p v-if="!$v.form.email.invalid && $v.form.email.$error" class="error-message">Invalid email adress</p>
  
  
</div>

<div class ="form-group">
<label for="password">Password:</label>
<input v-model="form.password"
  @blur="$v.form.password.$touch()" 
  :class ="{error: shouldAppendErrorClass($v.form.password), valid: shouldAppendValidClass($v.form.password)}"
  id="password">
  <p v-if="!$v.form.password.required && $v.form.password.$error" class="error-message">Please fill in your password</p>
  <p v-if="!$v.form.password.between && $v.form.password.$error" class="error-message">Password should be between 4 and 20</p>
  
  
</div>

<!-- <div class="form-group">
  <input v-model="form.newsletter"
             type="checkbox"
             id="newsletter"
            >
             <label for="newsletter">Subscribe to the newsletter</label><br>
</div> -->

<div class="submitButton">
<button id="submit-button" :disabled="$v.form.$invalid" @click="submitForm">SUBMIT</button>
</div>


</form>
</div>

</div>
</div>
</template>

<script>
import { required, integer, between,email } from 'vuelidate/lib/validators'

export default {
  data(){
    return{
      form:{
        firstName:null,
        secondName:null,
        password:null,
        email:null,
        newsletter:null
      }
    }
  },
  validations:{
    form:{
      firstName:{
        required
      },
      secondName:{
        required
      },
      password:{
        required,
        between: between(4-20)
      },
      email:{
        email,
        required
        // required: /*validators requiredIf*/(function(){
        //   // return !!this.form.newsletter
        // })
      }
      }      
    },    

  methods:{
    shouldAppendValidClass(field){
      return !field.$invalid && field.$model && field.$dirty
    },
    shouldAppendErrorClass(field){
      return field.$error
    },
    submitForm(){
    if(!this.$v.form.$invalid){ 
      console.log('Form Submitted', this.form)
      this.$router.push({path: 'filter'})
      
    }else{
      console.log('Invalid form')
     } 
    } 
  }
}
//<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js"></script>
</script>

<style scoped lang="css">


.flex-container {
  display: flex;
  justify-content:center;
  align-items: center;
 padding:100px; 
  
}
#form{
  background-color:#0000CC;
   background-image: linear-gradient(to right, rgba(255,0,0,0), rgb(199, 90, 193));
  color:white;
  font-family: Arial, Helvetica, sans-serif;
}
.sub-heading{
  background-color: orange;
  height:50px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-family: fantasy;
  margin-top: -50px;
  
 
}
h2{
  padding-left:20px;
  padding-top:15px;
  font-size:25px;
}
.signinForm {
  background-color: #000066;
  width:400px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
 
}
#submit-button{
  background-color: orange;
  border-radius: 2px;
  padding:5px;
  /* padding:10px;
  margin-top: 0; */
}
.submitButton{
  padding-left:150px;
  padding-bottom:30px;
}
.top-nav{
  background-color: black;
  color:white;
  height:60px;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%;

}
.form-group{
  padding:10px;
  
}
input{
  
  border-radius: 30px;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  color:black;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #FFF5EE;
}
.error-message{
  color:red;
}

</style>
