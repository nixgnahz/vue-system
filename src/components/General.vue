<template>
  <div class="main">
    <NavBar></NavBar>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
//22222
  import NavBar from './general/NavBar.vue'
  export default {
    components: {
      NavBar
    }
  }
</script>

<style>

</style>
