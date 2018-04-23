<template>
  <div>
    <TopBar :item="menu"></TopBar>
  </div>
</template>

<script>
  import TopBar from '../../TopBar.vue'
  export default {
    data () {
      return {
        menu: {
          name: "商场统计图",
          menu: ["图表管理", "商场统计图"]
        }
      }
    },
    components: {
      TopBar
    }
  }
</script>

<style>

</style>
