<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#143f6d" text-color="#fff" active-text-color="#ffd04b" :router="isRouter">
      <el-menu-item index="/echart">图表管理</el-menu-item>
      <el-menu-item index="/activity">活动管理</el-menu-item>
      <el-menu-item index="/info">信息管理</el-menu-item>
      <el-menu-item index="/general">综合管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isRouter: true,
        activeIndex: '/echart'
      }
    },
    created () {
      if(this.$route.path.match(/^\/echart\//)) {
        this.activeIndex = "/echart";
      }
      if(this.$route.path.match(/^\/activity\//)) {
        this.activeIndex = "/activity";
      }
      if(this.$route.path.match(/^\/info\//)) {
        this.activeIndex = "/info";
      }
      if(this.$route.path.match(/^\/general\//)) {
        this.activeIndex = "/general";
      }
    },
    beforeRouteUpdate (to, from, next) {
      next();
    }
  }
</script>

<style scoped>
  .el-menu--horizontal {
    border-bottom: 0px;
  }
</style>
