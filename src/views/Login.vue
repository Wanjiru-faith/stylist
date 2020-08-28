<template>
<v-app>
  <!-- <v-toolbar class="black" dark>
    <v-toolbar-title>Company name</v-toolbar-title>
  </v-toolbar> -->

  <v-container fluid style="margin: 0px; padding-top:100px; width: 100% " class=indigo darken-3 >
    <v-layout row wrap align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="lime accent-2" 
        style="width:600px; height:450px;    
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;">
                  <formhead/>
          <v-card-text style="padding-top:50px;">
            <v-form>
              
              <v-text-field v-model="form.email"
              @blur="$v.form.email.$touch()"
              light
              single-line
              outline
              prepend-inner-icon="account_box"
              label="User Name"
              class="inputs"
              style="background:white; height:55px;"
              aria-placeholder="Email"
              >
              
              </v-text-field>
               <p class ="errorMessage" v-if="!$v.form.email.required && $v.form.email.$error && !$v.form.email.email
               ">The email is not valid</p>
               <span>
                 <p>Error:{{$v.form.email.$error}}</p>
               </span>
              
              
             
             <v-text-field v-model="form.password" 
             @blur="$v.form.password.$touch()"
             single-line
             light
              outline
              prepend-inner-icon="lock"
              :type="show ? 'text'  : 'password'"
              placeholder="Super Secret Password"
              :append-icon="show ? 'visibility' : 'visibility_off'"
              @click:append="show = !show"
              class="inputs"
              style="background:white; height:55px; color:black"
              ></v-text-field>
              <p class ="errorMessage" v-if="$v.form.password.$error  && !$v.form.password.required">Your password does not match the email</p>
              <p>Error:{{$v.form.password.$error}}</p>

              <div class="form-group">
                <input v-model="form.rememberMe" 
             type="checkbox"
             id="newsletter">
             <label for="newsletter">REMEMBER ME</label>
             </div>

              <div class="form-group" style="padding-bottom:5px;
               padding-top:25px; padding-right:12px;">
              <v-btn @click="submitForm" id="submit-button">LOGIN</v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</v-app>
</template>

<script>
import { required, integer, between,email,password } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex';
import Swal from 'sweetalert2'
import formhead from "../components/formhead.vue"

export default {
  components:{   
    formhead
  },
  data(){
    return{
      form:{
        email:"",
        password:"",
        // rememberMe:'', 
      },
      show:false,
      password: "Password",
      
      canGoNext:false
    }
  },
  validations:{
    form:{
      email:{
        email,  
        // required
      },
      password:{
        required,  
        // password
        }
      
      }      
    },    

  methods:{
    // ...mapActions(['logInForm']),
    submitForm(){
      console.log('hey you')
      this.$v.form.$touch()
      if(!this.$v.form.$invalid && !this.$v.form.$error){
        this.$http.post('http://localhost:3000/login',{
        email: this.form.email,
        password: this.form.password
        })
          .then(response => {
    //         // var responseBody = response.body
    //         console.log(user + 'pss')
            
    // // //use the response from the server 
     let is_stylist = response.data.user.is_stylist
              localStorage.setItem('user',JSON.stringify(response.data.user))
              localStorage.setItem('jwt',response.data.token) 

                  console.log("who" + response.data.user)

                  
              if (localStorage.getItem('jwt') != null){
                this.$emit('loggedIn')
                  if(this.$route.params.nextUrl != null){
                      this.$router.push(this.$route.params.nextUrl)
                  }
                  else {
                      if(is_stylist== 1){
                        let userId = response.data.user.id;
                        this.$router.push(`stylistprofile/${userId}`)
                      }
                      else {
                        let userId = response.data.user.id;
                        this.$router.push(`filter/${userId}`)
                      }
                  }
              }
  })
  .catch(error =>{
    if (error.status == 404) 
      Swal.fire('title...', 'not found', 'warning')
    if (error.status == 401) 
      // Swal.fire('title...', 'you have entered the wrong password', 'warning')
      console.log(error)
    else if (error.status == 500) 
      // Swal.fire('title...', 'hfdftgrdtrd', 'warning')
      console.log("500" + error )
    else
      // Swal.fire('title...', 'something else', 'warning')
      console.log("sijui" + error)
    
  }) 
      }else{
        console.log('invalid form')
      }
    }
    }
  }
//<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js"></script>
</script>

<style scoped lang="scss">
.errorMessage{
  color:brown;
}
.inputs{
  color:black;
}
.container{
  background-color: rgb(12, 12, 12);
  background-image: radial-gradient(circle,black, rgb(43, 40, 40), black);
  color:black;
  font-size:17px;
}
#submit-button{
  background-color: black;
  border-radius: 2px;
  color:white;
  border-radius: 30px;
  width: 100%;
  padding: 12px 20px;
  height:40px;
}

 

</style>
