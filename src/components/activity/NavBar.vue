<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" :collapse="isCollapse" background-color="#143f6d" text-color="#fff" active-text-color="#ffd04b" :router="isRouter">
      <el-menu-item index="/activity/sponsor/step1">
        <i class="el-icon-menu"></i>
        <span slot="title">活动发布</span>
      </el-menu-item>
      <el-menu-item index="/activity/manage">
        <i class="el-icon-document"></i>
        <span slot="title">活动管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isRouter: true,
        activeIndex: '/activity/sponsor/step1'
      }
    },
    computed: {
      isCollapse () {
        return this.$store.state.isCollapse
      }
    },
    created () {
      if(this.$route.path.match(/^\/activity\/sponsor/)) {
        this.activeIndex = "/activity/sponsor/step1";
      }
      if(this.$route.path.match(/^\/activity\/manage/)) {
        this.activeIndex = "/activity/manage";
      }
    }
  }
</script>

<style scoped>
  div {
    height: 100%;
    background-color: #143f6d;
  }

  .el-menu {
    border: 0px;
  }
</style>
