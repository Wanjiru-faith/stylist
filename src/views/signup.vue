<template>
<div id ="form" >
    <div id="sub-heading">
    <formhead/>
    </div>
  <div class="flex-container">
<div class="signupForm">
<form @submit.prevent="submitForm" autocomplete="off" >
  <div class="names">
<div class="name">
<input placeholder="First Name"
v-model="form.firstName"
@blur="$v.form.firstName.$touch()" 
:class ="{error: shouldAppendErrorClass($v.form.firstName), 
valid: shouldAppendValidClass($v.form.firstName)}"
id="name">
<p v-if="$v.form.firstName.$error" class="error-message">You have not entered 
  <br>your first name</p>
</div>

<div class="name">
<input placeholder="Second Name"
v-model="form.secondName"
@blur="$v.form.secondName.$touch()" 
:class ="{error: shouldAppendErrorClass($v.form.secondName), 
valid: shouldAppendValidClass($v.form.secondName)}"
id="name">
<p v-if="$v.form.secondName.$error" class="error-message">You have not entered
  <br> your secondname</p>
</div>
</div>

<div class ="form-group">
<input placeholder="Email"
  v-model="form.email"
  @blur="$v.form.email.$touch()" 
  :class ="{error: shouldAppendErrorClass($v.form.email), valid: shouldAppendValidClass($v.form.email)}"
  id="name">
  <p v-if="$v.form.email.$invalid && $v.form.email.$error" class="error-message">Invalid email adress</p>
  
</div>

<div class ="form-group">
<input placeholder="Password"
v-model="form.password"
  @blur="$v.form.password.$touch()" 
  :class ="{error: shouldAppendErrorClass($v.form.password), valid: shouldAppendValidClass($v.form.password)}"
  id="password">
  <p v-if="!$v.form.password.required && $v.form.password.$error" class="error-message">Please fill in your password</p>
  <p v-if="!$v.form.password.between && $v.form.password.$error" class="error-message">Password should be between 4 and 20</p>
  
</div>
<div class="form-group">
  <input placeholder="Please confirm your Password"
  id="password-confirm" v-model="form.passwordConfirmation" required>
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
import Swal from 'sweetalert2'
import { required, integer, between,email } from 'vuelidate/lib/validators'
import formhead from "../components/formhead.vue"
// import { mapActions } from 'vuex';

export default {
  components:{   
    formhead
  },
  name:"signUpForm",
  props : ["nextUrl"],
  data(){
    return{
      form:{
        firstName:"",
        secondName:"",
        password:"",
        email:"",
        is_stylist : null,
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
        console.log(this.form.is_stylist)
      if(!this.$v.form.$invalid && this.form.password === 
      this.form.passwordConfirmation) { 

        let url = "http://localhost:3000/sign-up"

        if (this.is_stylist != null || this.is_stylist == 1)
        console.log('Form Submitted', this.form)
        this.$http.post(url,{
          firstName:this.form.firstName,
          secondName: this.form.secondName,
          email: this.form.email,  
          password: this.form.password,
          is_stylist: this.form.is_stylist
        })
        .then(response => { 
          let is_stylist = response.data.user.is_stylist
                          localStorage.setItem('user',JSON.stringify(response.data.user))
                          localStorage.setItem('jwt',response.data.token)
        
                          if (localStorage.getItem('jwt') != null){
                            //if user has an account already
                              this.$emit('loggedIn')
                              // console.log('we get here')

                              if(this.$route.params.nextUrl != null){
                                //I need explanation!!!
                                console.log("down")
                                this.$router.push(this.$route.params.nextUrl)
                                Swal.fire('title...', 'You have succesfully Signed-up', 'success')
                              }
                              else{
                              //     if(this.form.is_stylist== 1){
                              //       console.log("guide me", is_stylist);
                              //       console.log(this.form.is_stylist);
                              //       let userId = response.data.user.id;
                              //       this.$router.push(`stylistprofile/${userId}`)
                              //       console.log(userId)
                              //     }
                              //     else {
                                    console.log("this is used");
                                    let userId = response.data.user.id;
                                    this.$router.push(`filter/${userId}`)
                                  // }
                                }
                                // console.log(response.data.user[0].id)
                                // let userId = response.data.user[0].id;
                                // this.$router.push(`stylistprofile/${userId}`)
                              }
              })
        .catch(error => {
          console.error(error);
 
          // if (error.status == 500){
          //   Swal.fire('title...', 'You already have an account! Login please', 'warning')
          //   this.$router.push('/login')
          //   console.log(error)
          // }
          // console.error(error);  
          // Swal.fire('title...', 'You already have an account!', 'warning')
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

#form{
  background-color: rgb(12, 12, 12);
  background-image: radial-gradient(circle,black, rgb(43, 40, 40), black);
  color:black;
  font-family: Arial, Helvetica, sans-serif;
  font-size:17px;
  margin: auto;
  min-height:100vh;
}
.flex-container {
  display: flex;
  justify-content:center;
 align-items: center;
 padding-left:100px;
 padding-right:100px;
}
#sub-heading{
    /* background-color: rgb(145, 17, 117);   */
    padding-top: 100px; 
    width:100.5%;
    padding-left:342px;
    padding-right:348px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}
h2{
  padding-left:20px;
  padding-top:15px;
  font-size:25px;
}
.signupForm {
  background-color: rgb(211, 198, 13);
  width:600px;
}
#submit-button{
  background-color: black;
  border-radius: 2px;
  color:white;
  border-radius: 30px;
  width: 100%;
  padding: 12px 20px;
}
.submitButton{
  padding-left:30px;
  padding-right: 20px;
  padding-bottom:30px;
}
.names{
  padding:0px;
  display: initial;
}
.name{
  margin: 1px;
  display: initial;
 
}
.name input{
   border-radius: 30px;
  width: 49%;
  padding: 12px 20px;
  margin: 7px 0;
  display: inline-block;
  border: 1px solid #ccc;
  color:black;
  border-radius: 4px;
  box-sizing: border-box;
  background-color:white;
}
.form-group{
  padding:5px;
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
  background-color:white;
}
.error-message{
  color:red;
  /* width:49%; */
  display: inline-block;
}

::placeholder {
  color: black;
  opacity: 1; /* Firefox */
  font-size: 17px;
  
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
    color:purple;
    /* font-weight:; */
    margin: 7px 0;
    outline:none;
}
.classic{
    padding: 20px 120px;
    margin: 7px 0;
    width: 100%;
    /* border:solid white;
    font-size: 23px;
    font-weight: 500;
  	position: absolute; */
}

</style>
