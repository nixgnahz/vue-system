<template>
  <div>
    <div class="box-shadow">
      <h2>评价列表</h2>
      <Select v-model="type" style="width:150px" @on-change="changeSelectedData">
        <Option v-for="item in typeList" :value="item.value" :key="item.value">{{item.label}}</Option>
      </Select>
      <Input v-model="input" placeholder="请输入姓名或手机号进行搜索" style="width: 300px;margin: 0px 0.5rem;"></Input>
      <Button type="ghost" icon="ios-search" @click="search">搜索</Button>
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
        type: 0,
        typeList: [
          {label: "全部", value: 0},
          {label: "已签到", value: 1},
          {label: "未签到", value: 2}
        ],
        rows: [
          {type: 'selection', width: 60, align: 'center'},
          {title: '姓名', key: 'name'},
          {title: '手机号', key: 'tel'},
          {title: '报名渠道', key: 'channel'},
          {title: '状态', key: 'sign_status'}
        ],
        evaluateData: [],
        selectedData: [],
        input: ""
      }
    },
    created: function () {
      this.getData();
    },
    methods: {
      getData () {
        let self = this;
        axios.get('http://localhost:8080/static/evaluate.json').then((res)=>{
          self.evaluateData = res.data.data;
          self.selectedData = self.evaluateData;
        }).catch((error)=>{
          console.log(error)
        })
      },
      changeSelectedData (value) {
        this.selectedData = this.evaluateData.filter((item)=>{
          if(!value) {
            return true;
          } else{
            return item.sign_id == value;
          }
        })
      },
      search () {
        this.selectedData = this.evaluateData.filter((item)=>{
          if(item.name.indexOf(this.input) != -1 || item.tel.toString().indexOf(this.input) != -1) {
            return true;
          }
        })
      }
    }
  }
</script>

<style>
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
