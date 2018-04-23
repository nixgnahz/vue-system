<template>
  <div>
    <el-row>
      <el-col class="chart" :span="5">
        <div id="chart_1" style="width:100%; height:200px;"></div>
      </el-col>
      <el-col class="chart" :span="5">
        <div id="chart_2" style="width:100%; height:200px;"></div>
      </el-col>
      <el-col class="chart" :span="5">
        <div id="chart_3" style="width:100%; height:200px;"></div>
      </el-col>
      <el-col class="chart" :span="5">
        <div id="chart_4" style="width:100%; height:200px;"></div>
      </el-col>
      <el-col class="chart" :span="5">
        <div id="chart_5" style="width:100%; height:200px;"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    data () {
      return {
        menu: {
          name: "饼状图",
          menu: ["图表管理", "饼状图"]
        }
      }
    },
    mounted: function () {
      this.chart_1 = echarts.init(document.getElementById('chart_1'));
      this.chart_1.setOption({
        color: ['#c23531','#ddd'],
        title: { text: '342305', subtext: '充值收入', x:'center', y: 'center' },
        series: [ { type:'pie', labelLine: { normal: { show: false } }, radius: ['50%', '70%'], data:[{value:342305}, {value:33410}] } ]
      })
      this.chart_2 = echarts.init(document.getElementById('chart_2'));
      this.chart_2.setOption({
        color: ['#c23531','#ddd'],
        title: { text: '54205', subtext: '新增用户', x:'center', y: 'center' },
        series: [ { type:'pie', labelLine: { normal: { show: false } }, radius: ['50%', '70%'], data:[{value:54205}, {value:33410}] } ]
      })
      this.chart_3 = echarts.init(document.getElementById('chart_3'));
      this.chart_3.setOption({
        color: ['#c23531','#ddd'],
        title: { text: '44230', subtext: '活跃用户', x:'center', y: 'center' },
        series: [ { type:'pie', labelLine: { normal: { show: false } }, radius: ['50%', '70%'], data:[{value:44230}, {value:33410}] } ]
      })
      this.chart_4 = echarts.init(document.getElementById('chart_4'));
      this.chart_4.setOption({
        color: ['#c23531','#ddd'],
        title: { text: '44305', subtext: '商品收入', x:'center', y: 'center' },
        series: [ { type:'pie', labelLine: { normal: { show: false } }, radius: ['50%', '70%'], data:[{value:44305}, {value:33410}] } ]
      })
      this.chart_5 = echarts.init(document.getElementById('chart_5'));
      this.chart_5.setOption({
        color: ['#c23531','#ddd'],
        title: { text: '242305', subtext: '商品支出', x:'center', y: 'center' },
        series: [ { type:'pie', labelLine: { normal: { show: false } }, radius: ['50%', '70%'], data:[{value:242305}, {value:33410}] } ]
      })
    }
  }
</script>

<style scoped>
  .el-row {
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }
</style>

