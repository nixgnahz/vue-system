<template>
  <div>
    <TopBar :item="menu"></TopBar>
    <Table></Table>
  </div>
</template>

<script>
  import TopBar from '../../TopBar.vue'
  import Table from './Table.vue'
  export default {
    data () {
      return {
        menu: {
          name: "用户管理",
          menu: ["信息管理", "用户管理"]
        }
      }
    },
    components: {
      TopBar,
      Table
    }
  }
</script>

<style>

</style>
