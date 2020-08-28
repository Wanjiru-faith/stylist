<template>
        <v-toolbar app  dark class="toolbar">
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title></v-toolbar-title>
            <v-btn flat></v-btn>
            <v-spacer></v-spacer>
            <div class="buttons">
            <v-btn flat @click="login">LOGIN</v-btn>
            <v-btn flat @click="signUp">SIGN UP</v-btn>
            </div>
        </v-toolbar>
</template>

<script>
export default {
    name: 'AppNavigation',
    methods:{
        login(){
            this.$router.push({path: 'login'})
        },
        signUp(){
            this.$router.push({path: 'sign-up'})
        } 

    }
};
</script>

<style scoped>
.toolbar{
    background-color:black;
    color:white;
    height:85px;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%;
}
.v-btn{
    padding-top: 20px;
    font-size:20px;
    color: aqua;
}
.sba{
    padding-left:200px;
}
.link{
    padding:50px;
}

</style>