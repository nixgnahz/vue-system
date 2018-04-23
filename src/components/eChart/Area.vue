<template>
  <div>
    <TopBar :item="menu"></TopBar>
    <el-col class="chart" :span="15">
      <p>降水量统计图</p>
      <div id="chart" style="width:100%; height:550px;"></div>
    </el-col>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import TopBar from '../TopBar.vue'
  export default {
    data () {
      return {
        menu: {
          name: "面积图",
          menu: ["图表管理", "面积图"]
        }
      }
    },
    components: {
      TopBar
    },
    mounted: function () {
      this.chart = echarts.init(document.getElementById('chart'));
      this.chart.setOption({
        tooltip : {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: { data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎'] },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
          }
        ],
        yAxis : [{ type : 'value' }],
        series : [
          {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[220, 182, 191, 234, 290, 330, 310]
          },
          {
            name:'视频广告',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[150, 232, 201, 154, 190, 330, 410]
          },
          {
            name:'直接访问',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[320, 332, 301, 334, 390, 330, 320]
          },
          {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      })
    }
  }
</script>

<style>

</style>
