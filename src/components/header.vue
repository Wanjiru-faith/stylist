<template>
        <v-toolbar app  dark class="toolbar">
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title></v-toolbar-title>
            <v-btn flat>Menu</v-btn>
            <!-- -->
            <div class ="sba">
                <i class="link">Services</i> 
                <i class="link">Blog</i>
                <i class="link">About Us</i>
            </div>
            
            
            <v-spacer></v-spacer>
            <v-btn flat @click="login">LOGIN</v-btn>
            <v-btn flat @click="signIn">SIGN IN</v-btn>
        </v-toolbar>
</template>

<script>
export default {
    name: 'AppNavigation',
    methods:{
        login(){
            this.$router.push({path: 'login'})
        },
        signIn(){
            this.$router.push({path: 'sign-in'})
        } 

    }
};
</script>

<style scoped>
.toolbar{
    background-color:black;
    color:white;
    height:70px;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%;
}
.sba{
    padding-left:200px;
}
.link{
    padding:50px;
}
</style>