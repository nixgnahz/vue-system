<template>
  <div>
    <TopBar :item="menu"></TopBar>
    <el-col class="chart" :span="12">
      <p>客户来源分布图</p>
      <div id="chart" style="width:100%; height:400px;"></div>
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
          name: "折线图",
          menu: ["图表管理", "折线图"]
        }
      }
    },
    components: {
      TopBar
    },
    mounted: function () {
      this.chart = echarts.init(document.getElementById('chart'));
      this.chart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        toolbox: {
          feature: {
            saveAsImage: {},
            dataView: {},
            magicType: {type: ['bar']}
          },
          showTitle: false,
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      })
    }
  }
</script>

<style>

</style>
