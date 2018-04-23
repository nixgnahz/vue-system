<template>
  <div>
    <div class="btn">
      <Button type="ghost" icon="plus-circled" @click="changeAddMaskStatus">添加用户</Button>
      <Button type="ghost" icon="key" style="margin: 0px 0.5rem;" @click="changePermissionMaskStatus">权限分配</Button>
    </div>
    <Table border ref="selection" :columns="columns" :data="userData" style="margin-top: 0.5rem;" border></Table>
    <div class="user_mask" v-show="isShowAddMask">
      <Form :model="formData" :label-width="80" inline class="form_box box">
        <h3>创建用户</h3>
        <FormItem label="用户名">
          <Input v-model="formData.name"></Input>
        </FormItem>
        <FormItem label="登录密码">
          <Input v-model="formData.password"></Input>
        </FormItem>
        <FormItem label="电话号码">
          <Input v-model="formData.tel"></Input>
        </FormItem>
        <FormItem label="邮箱">
          <Input v-model="formData.email"></Input>
        </FormItem>
        <FormItem label="用户身份">
          <RadioGroup v-model="formData.position">
            <Radio label="manager">管理员</Radio>
            <Radio label="user">用户</Radio>
          </RadioGroup>
        </FormItem>
        <Row class="flex">
          <Col span="5">
            <Button type="primary" @click="addUser">提交</Button>
          </Col>
          <Col span="5">
            <Button type="ghost" @click="changeAddMaskStatus">取消</Button>
          </Col>
        </Row>
      </Form>
    </div>
    <div class="user_mask" v-show="isShowPermissionMask">
      <div class="box" style="width: 35%;">
        <h2>请选择需要修改的权限</h2>
        <div class="between">
          <span>电池登记</span>
          <Checkbox v-model="formData.input_1"></Checkbox>
        </div>
        <div class="between">
          <span>基础信息</span>
          <Checkbox v-model="formData.input_2"></Checkbox>
        </div>
        <div class="between">
          <span>运行状况</span>
          <Checkbox v-model="formData.input_3"></Checkbox>
        </div>
        <div class="between">
          <span>主动检测</span>
          <Checkbox v-model="formData.input_4"></Checkbox>
        </div>
        <div class="between">
          <span>历史数据</span>
          <Checkbox v-model="formData.input_5"></Checkbox>
        </div>
        <div class="between">
          <span>报警设置</span>
          <Checkbox v-model="formData.input_6"></Checkbox>
        </div>
        <div class="between">
          <span>设备删除</span>
          <Checkbox v-model="formData.input_7"></Checkbox>
        </div>
        <div class="between">
          <span>同一电池单元数据分析</span>
          <Checkbox v-model="formData.input_8"></Checkbox>
        </div>
        <Row class="flex">
          <Col span="5">
            <Button type="primary">确定</Button>
          </Col>
          <Col span="2"></Col>
          <Col span="5">
            <Button type="ghost" @click="changePermissionMaskStatus">取消</Button>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        columns: [
          {type: 'selection', width: 60, align: 'center'},
          {title: '用户名', key: 'name'},
          {title: '账号身份', key: 'position'},
          {title: '手机号', key: 'tel'},
          {title: '邮箱', key: 'email'},
          {title: 'Action', key: 'action', width: 100, align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {type: 'primary', size: 'small'},
                  style: {textDecoration: 'underline'},
                  on: {
                    click: () => {
                      this.deleteUser(params.index)
                    }
                  }
                }, '删除')
              ])
            }
          }
        ],
        userData: [
          {
            name: "张欣",
            position: "管理员",
            tel: "18876564356",
            email: "surezhangxin@123.com"
          },
          {
            name: "陈应洲",
            position: "管理员",
            tel: "17622934512",
            email: "purechenyingzhou@123.com"
          },
          {
            name: "王家卫",
            position: "用户",
            tel: "1308764570",
            email: "467567898765@123.com"
          },
          {
            name: "李敏丽",
            position: "用户",
            tel: "18723461269",
            email: "opensure@123.com"
          }
        ],
        formData: {
          name: "",
          password: "",
          position: "",
          tel: "",
          email: ""
        },
        isShowAddMask: false,
        isShowPermissionMask: false
      }
    },
    methods: {
      addUser () {
        for(let key in this.formData) {
          if(!this.formData[key]) {
            return;
          }
        }
      },
      deleteUser () {
        this.$confirm('确定删除该用户？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
      },
      changeAddMaskStatus () {
        this.isShowAddMask = !this.isShowAddMask;
        for(let key in this.formData) {
          this.formData[key] = "";
        }
      },
      changePermissionMaskStatus () {
        this.isShowPermissionMask = !this.isShowPermissionMask;
      }
    }
  }
</script>

<style scoped>
  .btn {
    margin-top: 0.5rem;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    margin-bottom: 0.5rem;
  }

  .between {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.5rem;
    margin: 0.5rem 0px;
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

  .form_box {
    width: 50%;
  }

  .box {
    background-color: #fff;
    border-radius: 0.2rem;
    padding: 0.75rem 0.5rem;
  }

  .form_box h3 {
    margin-bottom: 1rem;
  }
</style>
