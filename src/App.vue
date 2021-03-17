<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
// 11111
  export default {
    name: 'App',
    mounted: function () {
      this.$Notice.success({
        title: '欢迎进入VUEADMIN',
        desc: '今天星期五，天气晴朗',
        duration: 5
      })
    }
  }
</script>

<style>

</style>
