<template>
  <div class="main">
    <NavBar></NavBar>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
  import NavBar from './general/NavBar.vue'
  export default {
    components: {
      NavBar
    }
  }
</script>

<style>

</style>
