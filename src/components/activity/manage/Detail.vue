<template>
  <div class="manage_detail">
    <h1>植树节活动</h1>
    <Row>
      <Col span="6">发起人：张欣</Col>
      <Col span="12">发起时间：2018-03-09</Col>
      <Col span="6">浏览数：1236</Col>
    </Row>
    <el-menu :default-active="activeTab" class="el-menu-demo" mode="horizontal" :router="isRouter">
      <el-menu-item index="/activity/manage/detail/sign">签到</el-menu-item>
      <el-menu-item index="/activity/manage/detail/static">数据统计</el-menu-item>
      <el-menu-item index="/activity/manage/detail/evaluate">评价管理</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isRouter: true,
        activeTab: "/activity/manage/detail/sign"
      }
    },
    created: function (){
      this.activeTab = this.$route.path;
    }
  }
</script>

<style scoped>
  .manage_detail {
    padding: 0.5rem;
  }

  .manage_detail .ivu-row {
    padding: 0.7rem 0px 0.3rem;
    font-size: 0.45rem;
    border-bottom: 1px solid #999;
    font-weight: 500;
  }

  .manage_detail .el-menu-demo {
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
  }
</style>
