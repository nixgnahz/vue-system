<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" :collapse="isCollapse" background-color="#143f6d" text-color="#fff" active-text-color="#ffd04b" :router="isRouter">
      <el-menu-item index="/info/user">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/info/goods">
        <i class="el-icon-document"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isRouter: true,
        activeIndex: '/info/user'
      }
    },
    computed: {
      isCollapse () {
        return this.$store.state.isCollapse
      }
    },
    created () {
      this.activeIndex = this.$route.path;
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
