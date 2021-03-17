<template>
  <div class="main">
    <NavBar></NavBar>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
//  2222
  import NavBar from './activity/NavBar.vue'
  export default {
    components: {
      NavBar
    }
  }
</script>

<style>

</style>
