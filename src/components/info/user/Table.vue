<template>
  <div>
    <div class="search">
      <AutoComplete v-model.trim="search" :data="history" placeholder="请输入用户姓名" style="width:6rem"></AutoComplete>
      <Button type="info" icon="ios-search" @click="searchUser">查询</Button>
      <Button type="info" @click="addUser">新增</Button>
    </div>
    <Table :loading="isShowLoading" stripe border ref="table" :columns="columns" :data="data" @on-select="getSelected"></Table>
    <div class="action">
      <Button type="error" :disabled="!selected.length" @click="removeUser">批量删除</Button>
      <Button type="primary" size="large" @click="exportData"><Icon type="ios-download-outline" style="margin-right: 0.3rem;"></Icon>导出原始数据</Button>
      <Page :total="total" show-elevator @on-change="getCurrentPage"></Page>
    </div>
    <div class="user_mask" v-show="isShowMask">
      <div class="user_info">
        <div class="top">
          <span @click="changeMaskStatus">
            <Icon class="close" type="close-round" size="20"></Icon>
          </span>
          <span class="title">编辑</span>
        </div>
        <Form :model="formData" :label-width="80" :rules="ruleValidate">
          <FormItem label="姓名" prop="name">
            <Input v-model="formData.name" placeholder="请输入姓名"></Input>
          </FormItem>
          <FormItem label="性别" required prop="sex">
            <RadioGroup v-model="formData.sex">
              <Radio label="男">男</Radio>
              <Radio label="女">女</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="年龄" required prop="age">
            <el-input-number v-model="formData.age" controls-position="right" :min="1" :max="120"></el-input-number>
          </FormItem>
          <FormItem label="生日" required prop="date">
            <DatePicker type="date" placeholder="请选择生日" v-model="formData.date"></DatePicker>
          </FormItem>
          <FormItem label="地址" required prop="adress">
            <Input v-model="formData.address" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请填写地址"></Input>
          </FormItem>
          <div class="btn">
            <Button type="ghost" @click="changeMaskStatus">取消</Button>
            <Button type="primary" @click="submitInfo">提交</Button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        search: "",
        history: [],
        isShowLoading: true,
        isShowMask: false,
        data: [],
        page: 1,
        count: 10,
        total: 10,
        selected: [],
        formData: {
          name: "",
          sex: "",
          age: 0,
          date: "",
          address: ""
        },
        ruleValidate: {
          name: [{ required: true, message: '姓名不能为空', trigger: 'blur' }]
        },
        columns: [
          { type: 'selection', width: 60, align: 'center' },
          { type: 'index', width: 60, align: 'center' },
          { title: '姓名', width: 120, key: 'name', sortable: true },
          { title: '性别', key: 'sex', width: 120, sortable: true,
            filters: [{  label: '男', value: 1 }, { label: '女', value: 2 }],
            filterMultiple: false,
            filterMethod (value, row) {
              if (value === 1) {
                return row.sex == "男";
              } else if (value === 2) {
                return row.sex == "女";
              }
            }
          },
          { title: '年龄', key: 'age', width: 120, sortable: true,
            filters: [{ label: '年龄不超过25岁', value: 1 },{ label: '年龄超过25岁', value: 2 }],
            filterMultiple: false,
            filterMethod (value, row) {
              if (value === 1) {
                return row.age <= 25;
              } else if (value === 2) {
                return row.age > 25;
              }
            }
          },
          { title: '生日', key: 'date', width: 150, sortable: true },
          { title: '地址', key: 'address', sortable: true },
          { title: '操作', key: 'action', width: 180, align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: { type: 'primary', size: 'default' },
                  style: { marginRight: '10px' },
                  on: {
                    click: () => {
                      this.editUser(params.index)
                    }
                  }
                }, '编辑'),
                h('Button', {
                  props: { type: 'error', size: 'default' },
                  on: {
                    click: () => {
                      this.removeUser(params.index)
                    }
                  }
                }, '删除')
              ])
            }
          }
        ]
      }
    },
    created: function() {
      this.getPageData()
    },
    methods: {
      getPageData () {
        axios.get('http://localhost:8080/static/user.json',{
          params: {
            page: this.page,
            count: this.count
          }
        }).then((res)=>{
          this.isShowLoading = false;
          this.total = res.data.dataCount;
          var start = (this.page - 1) * 10 ? (this.page - 1) * 10 - 1 : 0;
          this.data = res.data.data.slice(start, start + this.count);
        }).catch((error)=>{
          console.log(error)
        })
      },
      getCurrentPage (val) {
        this.page = val;
        this.isShowLoading = true;
        this.getPageData();
      },
      getSelected (selection, row) {
        this.selected = selection;
      },
      searchUser () {
        this.page = 1;
        if(this.search) {
          this.isShowLoading = true;
          var self = this;
          axios.get('http://localhost:8080/static/user.json').then((res)=>{
            self.isShowLoading = false;
            var arr = [];
            for(let j = 0; j < res.data.data.length; j++) {
              if(res.data.data[j].name.indexOf(this.search) != -1) {
                arr.push(res.data.data[j]);
              }
            }
            self.filterHistory();
            self.data = arr;
            self.total = arr.length;
          }).catch((error)=>{
            console.log(error)
          })
        } else{
          this.getPageData();
        }
      },
      filterHistory () {
        let search = this.search;
        this.search = "";
        for(var i = 0; i < this.history.length; i++) {
          if(this.history == search) {
            return;
          }
        }
        this.history.push(search);
      },
      changeMaskStatus () {
        this.isShowMask = !this.isShowMask;
      },
      addUser () {
        this.changeMaskStatus();
        for(var key in this.formData) {
          this.formData[key] = "";
        }
      },
      editUser (index) {
        this.formData = {
          name: this.data[index].name,
          sex: this.data[index].sex,
          age: this.data[index].age,
          date: this.data[index].date,
          address: this.data[index].address
        }
        this.changeMaskStatus();
      },
      removeUser (index) {
        this.$confirm('此操作将永久删除该用户, 是否继续', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

        })
      },
      submitInfo () {
        for(var key in this.formData) {
          if(!this.formData[key]) return;
        }
        this.$confirm('确定提交？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info'
        }).then(() => {
          this.changeMaskStatus();
        })
      },
      exportData () {
        this.$refs.table.exportCsv({
          filename: '用户信息-原始数据'
        })
      }
    }
  }
</script>

<style scoped>
  .search {
    background-color: #f2f2f2;
    padding: 0.25rem;
    margin: 0.5rem 0px;
  }

  .ivu-btn-info {
    margin-left: 0.3rem;
  }

  .action {
    display: flex;
    align-items: center;
    background-color: #f2f2f2;
    padding: 0.25rem;
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem 0px 1.5rem;
  }

  .user_mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
  }

  .user_info {
    width: 15rem;
    background-color: white;
    padding: 0.5rem;
    border-radius: 0.2rem;
    position: relative;
  }

  .title {
    font-weight: 700;
    font-size: 0.45rem;
  }

  .close {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
  }

  .top {
    margin: 0rem 0px 1rem;
  }

  .btn {
    float: right;
  }

  .btn button {
    margin: 0px 0.25rem;
  }
</style>
