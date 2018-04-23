<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" :collapse="isCollapse" background-color="#143f6d" text-color="#fff" active-text-color="#ffd04b" :router="isRouter">
      <el-menu-item index="/echart/histogram">
        <i class="el-icon-menu"></i>
        <span slot="title">柱状图</span>
      </el-menu-item>
      <el-menu-item index="/echart/radar">
        <i class="el-icon-document"></i>
        <span slot="title">雷达图</span>
      </el-menu-item>
      <el-menu-item index="/echart/line">
        <i class="el-icon-document"></i>
        <span slot="title">折线图</span>
      </el-menu-item>
      <el-menu-item index="/echart/pie">
        <i class="el-icon-document"></i>
        <span slot="title">饼状图</span>
      </el-menu-item>
      <el-menu-item index="/echart/area">
        <i class="el-icon-document"></i>
        <span slot="title">面积图</span>
      </el-menu-item>
      <el-menu-item index="/echart/cartogram">
        <i class="el-icon-document"></i>
        <span slot="title">商场统计图表</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isRouter: true,
        activeIndex: '/echart/histogram'
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
