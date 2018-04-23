<template>
  <div>
    <div class="boxes">
      <p class="title">数据统计时间<span>2018-03-10 —— 2018-04-19</span></p>
    </div>
    <div class="boxes">
      <p class="title">数据总览</p>
      <Row>
        <Col span="4">
          <div class="data_box">
            <p>1000</p>
            <span>浏览次数</span>
          </div>
        </Col>
        <Col span="4">
           <div class="data_box">
            <p>300</p>
            <span>浏览用户数</span>
          </div>
        </Col>
        <Col span="4">
           <div class="data_box">
            <p>100</p>
            <span>报名人数</span>
          </div>
        </Col>
        <Col span="4">
           <div class="data_box">
            <p>10%</p>
            <span>报名转化率</span>
          </div>
        </Col>
        <Col span="4">
           <div class="data_box">
            <p>88</p>
            <span>签到人数</span>
          </div>
        </Col>
      </Row>
    </div>
    <div class="boxes">
      <p class="title">数据趋势</p>
      <el-col class="chart" :span="15">
        <p>报名数据趋势</p>
        <div id="chart" style="width:100%; height:550px;"></div>
      </el-col>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    mounted: function () {
      this.chart = echarts.init(document.getElementById('chart'));
      this.chart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: ['3-10', '3-15', '3-20', '3-25', '3-30', '4-4', '4-9', '4-14', '4-19']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320, 234, 425],
          type: 'line'
        }]
      })
    }
  }
</script>

<style scoped>
  .boxes {
    margin: 1.5rem 0px;
  }

  .title {
    font-size: 0.55rem;
    font-weight: 600;
    border-left: 3px solid #20a0ff;
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .title span {
    font-size: 0.5rem;
    font-weight: 400;
    margin-left: 0.8rem;
  }

  .data_box {
    border: 1px solid #20a0ff;
    height: 4rem;
    margin-right: 1rem;
    border-radius: 0.2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .data_box p {
    font-size: 0.6rem;
    font-weight: 600;
  }

  .data_box span {
    font-size: 0.4rem;
  }
</style>
