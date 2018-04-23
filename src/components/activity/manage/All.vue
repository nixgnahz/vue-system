<template>
  <div>
    <Row class="top">
      <Col class="container" span="8">
        <span>{{activityData.length}}</span>
        <p>活动总数</p>
      </Col>
      <Col class="container" span="8">
        <span>{{registrations}}</span>
        <p>报名总数</p>
      </Col>
      <Col class="container" span="8">
        <span>{{views}}</span>
        <p>浏览总数</p>
      </Col>
    </Row>
    <div class="box-shadow">
      <h2>活动列表</h2>
      <Select v-model="type" style="width:150px" @on-change="changeSelectedData">
        <Option v-for="item in typeList" :value="item.value" :key="item.value">{{item.label}}</Option>
      </Select>
      <Button type="ghost" style="margin: 0px 0.25rem;">置顶</Button>
      <Button type="ghost">删除</Button>
      <Table :columns="rows" :data="selectedData"></Table>
      <Page :total="selectedData.length" show-sizer></Page>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        rows: [
          {type: 'selection', width: 60, align: 'center'},
          {title: '活动名称', key: 'name'},
          {title: '活动分类', key: 'type'},
          {title: '活动状态', key: 'status'},
          {title: '浏览数', key: 'views'},
          {title: '报名数', key: 'registrations'},
          {title: '操作', key: 'action', align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {type: 'primary', size: 'small'},
                  on: {
                    click: () => {
                      this.showDetail(params.index)
                    }
                  }
                }, '查看详情')
              ])
            }
          }
        ],
        activityData: [],
        selectedData: [],
        type: 0,
        registrations: 0,
        views: 0,
        typeList: [
          {label: "全部", value: 0},
          {label: "免费活动", value: 1},
          {label: "收费活动", value: 2}
        ]
      }
    },
    created: function () {
      this.getActivityData();
    },
    methods: {
      getActivityData () {
        var self = this;;
        axios.get('http://localhost:8080/static/activity.json').then((res)=>{
          self.activityData = res.data.data;
          self.selectedData = self.activityData;
          self.registrations = res.data.registrations;
          self.views = res.data.views;
        }).catch((error)=>{
          console.log(error)
        })
      },
      changeSelectedData (value) {
        this.selectedData = [];
        this.selectedData = this.activityData.filter((item)=>{
          if(!value) {
            return true;
          } else{
            return item.type_id == value;
          }
        })
      },
      showDetail () {
        this.$router.push({name: 'details', params: {info: 'info1'}})
      }
    }
  }
</script>

<style scoped>
  .top {
    padding: 0.5rem 0px;
    text-align: center;
    color: #fff;
    margin-top: 0.5rem;
    background-color: rgb(51, 204, 204);
  }

  .top .container {
    padding: 0.5rem 0px;
    border-right: 1px solid #fff;
  }

  .top .container:last-child {
    border: 0px;
  }

  .top span {
    font-size: 0.8rem;
    font-weight: bolder;
  }

  .top p {
    font-size: 0.45rem;
  }

  .box-shadow {
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    padding: 1rem 0.5rem;
    margin: 1rem 0px;
    border: 1px solid #d3dce6;
  }

  .box-shadow h2 {
    margin-bottom: 1rem;
  }

  .ivu-table-wrapper {
    margin-top: 0.7rem;
  }

  .ivu-page {
    text-align: right;
    margin-top: 0.7rem;
  }
</style>
