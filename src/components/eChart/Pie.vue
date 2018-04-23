<template>
  <div>
    <TopBar :item="menu"></TopBar>
    <el-col class="chart" :span="15">
      <p>用户访问来源图</p>
      <div id="chart" style="width:100%; height:500px;"></div>
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
          name: "饼状图",
          menu: ["图表管理", "饼状图"]
        }
      }
    },
    components: {
      TopBar
    },
    mounted: function () {
      this.chart = echarts.init(document.getElementById('chart'));
      this.chart.setOption({
        title: {
          x:'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
              {value:335, name:'直接访问'},
              {value:310, name:'邮件营销'},
              {value:234, name:'联盟广告'},
              {value:135, name:'视频广告'},
              {value:1548, name:'搜索引擎'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    }
  }
</script>

<style>

</style>
