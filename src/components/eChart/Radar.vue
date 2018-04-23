<template>
  <div>
    <TopBar :item="menu"></TopBar>
    <el-col class="chart" :span="15">
      <p>开销占比图</p>
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
          name: "雷达图",
          menu: ["图表管理", "雷达图"]
        }
      }
    },
    components: {
      TopBar
    },
    mounted: function () {
      this.chart = echarts.init(document.getElementById('chart'));
      this.chart.setOption({
        tooltip: {},
        legend: {
          data: ['预算分配', '实际开销']
        },
        radar: {
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
           { name: '销售', max: 6500},
           { name: '管理', max: 16000},
           { name: '信息技术', max: 30000},
           { name: '客服', max: 38000},
           { name: '研发', max: 52000},
           { name: '市场', max: 25000}
          ]
        },
        series: [{
          name: '预算 vs 开销',
          type: 'radar',
          data : [
            {
              value : [4300, 10000, 28000, 35000, 50000, 19000],
              name : '预算分配'
            },
            {
              value : [5000, 14000, 28000, 31000, 42000, 21000],
              name : '实际开销'
            }
          ]
        }]
      })
    }
  }
</script>

<style>

</style>
