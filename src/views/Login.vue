<template>
<v-app>
  <!-- <v-toolbar class="black" dark>
    <v-toolbar-title>Company name</v-toolbar-title>
  </v-toolbar> -->

  <v-container fluid style="margin: 0px; padding-top:100px; width: 100% " class=indigo darken-3 >
    <v-layout row wrap align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="indigo darken-4" style="width:70%; height:600px;">
          <!-- <v-card-title> -->
            <v-toolbar class="orange" dark>
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
          <!-- </v-card-title> -->
          <v-card-text style="padding-top:50px;">
            <v-form>
              
              <v-text-field v-model="form.email"
              @blur="$v.form.email.$touch()"
              dark
              single-line
              outline
              prepend-inner-icon="account_box"
              label="User Name"
              class="inputs"
              >
              
              </v-text-field>
               <p class ="errorMessage" v-if="!$v.form.email.required && $v.form.email.$error && !$v.form.email.email
               ">The email is not valid</p>
               <p>Error:{{$v.form.email.$error}}</p>
              
              
             
             <v-text-field v-model="form.password" 
             @blur="$v.form.password.$touch()"
             single-line
             dark
              outline
              prepend-inner-icon="lock"
              :type="show ? 'text'  : 'password'"
              placeholder="Super Secret Password"
              :append-icon="show ? 'visibility' : 'visibility_off'"
              @click:append="show = !show"
              class="inputs"
              ></v-text-field>
              <p class ="errorMessage" v-if="$v.form.password.$error  && !$v.form.password.required">Your password does not match the email</p>
              <p>Error:{{$v.form.password.$error}}</p>

              <div class="form-group">
                <input v-model="form.rememberMe" 
             type="checkbox"
             id="newsletter">
             <label for="newsletter">REMEMBER ME</label>
             </div>

              <div class="form-group" style="padding-bottom:5px;">
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

export default {
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
      this.$v.form.$touch()
      if(!this.$v.form.$invalid && !this.$v.form.$error){
        this.$http.post('http://localhost:3000/login',{
        email: this.form.email,
        password: this.form.password
        })
        // this.logInForm(this.form)
          .then(response => {
    //use the response from the server 
     let is_stylist = response.data.user.is_stylist
              localStorage.setItem('user',JSON.stringify(response.data.user))
              localStorage.setItem('jwt',response.data.token)

              if (localStorage.getItem('jwt') != null){
                  // this.$emit('loggedIn')
                  if(this.$route.params.nextUrl != null){
                      this.$router.push(this.$route.params.nextUrl)
                  }
                  else {
                      if(is_stylist== 1){
                          let userId = response.body.user.id;
                          this.$router.push(`stylistprofile/${userId}`)
                          // console.log(`stylistprofile/${userId}`)
                      }
                      else {
                          this.$router.push({path:'/'})
                      }
                  }
              }
  })
  console.log('Form Submitted', this.form)
        
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
  color:azure;
}
.container{
   background-color:#0000CC;
   background-image: linear-gradient(to right, rgba(255,0,0,0), rgb(199, 90, 193));
}

 

</style>
