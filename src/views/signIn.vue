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
  <p v-if="$v.form.email.$invalid && $v.form.email.$error" class="error-message">Invalid email adress</p>
  
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
<div class="form-group">
  <label for="password-confirm" type="password">Please confirm your password!
  </label>
  <input id="password-confirm" v-model="form.passwordConfirmation" required>
</div>

<div class="classic">
  <label for="password-confirm">Are you open as a hair-stylist?</label>
  <select v-model="form.is_stylist" >
    <option value=1 >Yes</option>
    <option value=0>No</option>
  </select>
  </div>



<!-- <div class="form-group">
  <input v-model="form.newsletter"
             type="checkbox"
             id="newsletter"
            >
             <label for="newsletter">Subscribe to the newsletter</label><br>
</div> -->

<div class="submitButton">
<button type="submit" id="submit-button" :disabled="$v.form.$invalid" >SUBMIT</button>
</div>


</form>
</div>

</div>
</div>
</template>

<script>
import { required, integer, between,email } from 'vuelidate/lib/validators'
// import { mapActions } from 'vuex';

export default {
  name:"signInForm",
  props : ["nextUrl"],
  data(){
    return{
      form:{
        firstName:"",
        secondName:"",
        password:"",
        email:"",
        is_stylist : 0,
        passwordConfirmation : "",
      },
      
            
       
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
        
      },
      email:{
        // email,
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

      if(!this.$v.form.$invalid && this.form.password === this.form.passwordConfirmation) { 
        console.log('Form Submitted', this.form)
        // this.$router.push({path: '/'})
        this.$http.post('http://localhost:3000/sign-in',{
          firstName:this.form.firstName,
          secondName: this.form.secondName,
          email: this.form.email,  
          password: this.form.password,
          is_stylist: this.form.is_stylist
        })
        .then(response => {
                          localStorage.setItem('user',JSON.stringify(response.data.user))
                          localStorage.setItem('jwt',response.data.token)
        
                          if (localStorage.getItem('jwt') != null){//if user has an account already
                              // this.$emit('loggedIn')
                              if(this.$route.params.nextUrl != null){//I need explanation!!!
                                  this.$router.push(this.$route.params.nextUrl)
                              }
                              else{
                                  this.$router.push('/')    
                              }
                          }
                          
              })
        .catch(error => {
          console.error(error);
        });

      } else {
        this.form.password = ""
        this.form.passwordConfirm = ""

        return alert("Passwords do not match")
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
.form-group input{
  
  border-radius: 30px;
  width: 100%;
  padding: 12px 20px;
  margin: 7px 0;
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

::placeholder {
  color: black;
  opacity: 1; /* Firefox */
  font-size: 30px;
  
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
 color: black;
}

::-ms-input-placeholder { /* Microsoft Edge */
 color: black;
}
select::-ms-expand {
     display: block;
     -webkit-appearance: menu; }

select {
    -webkit-appearance: menulist !important; 
    color:red;
    /* font-weight:; */
    margin: 7px 0;
    outline:none;
}
.classic{
    padding: 12px 20px;
    margin: 7px 0;
    width: 100%;
    /* border:solid white;
    font-size: 23px;
    font-weight: 500;
  	position: absolute; */
}

</style>
