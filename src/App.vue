<template>

  <div>
    <app-header v-if="!$route.meta.hideNavigation"></app-header>
    <router-view/>
    <app-footer v-if="!$route.meta.hideNavigation"></app-footer>
  </div>
    
    
 
</template>

<script>
import footer from './components/footer.vue'
import header from './components/header.vue'
import Booking from '@/views/Booking.vue'

export default {
  components:{
    // 'app-filter':filter,
    'app-footer':footer,
    'app-header':header,
    
  },

  data(){ 
    return{ 

    }
  }
}


</script>


<style lang="scss">


</style>
