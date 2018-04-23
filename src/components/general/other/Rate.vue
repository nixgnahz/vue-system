<template>
  <div>
    <Card>
      <p slot="title">
        <Icon type="android-star-half"></Icon>
        评价中心
      </p>
      <div>
        <p class="flex">
          <span>服务评价</span>
          <el-rate allow-half v-model="rate.service" show-text></el-rate>
          </p>
        <p class="flex">
          <span>外观评价</span>
          <el-rate allow-half v-model="rate.appearance" show-text></el-rate>
          </p>
        <p class="flex">
          <span>使用评价</span>
          <el-rate allow-half v-model="rate.use" show-text></el-rate>
          </p>
        <p class="flex">
          <span>总体评价</span>
          <el-rate allow-half v-model="rate.total" show-text></el-rate>
        </p>
      </div>
    </Card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        rate: {
          service: 4,
          appearance: 4,
          use: 4,
          total: 4
        }
      }
    }
  }
</script>

<style scoped>
  .flex {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 0.25rem 0px;
  }

  .flex>span {
    color: #2d8cf0;
    font-size: 0.4rem;
    margin-right: 0.5rem;
  }

  .el-rate__text {
    font-size: 0.4rem;
    margin-left: 0.3rem;
  }

  .ivu-card {
    width: 13rem;
    margin: 0.75rem 0.5rem;
  }
</style>
