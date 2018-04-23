<template>
  <div>
    <Row class="between">
      <Col span="5">
        <Input v-model="input" icon="ios-search" placeholder="搜索单品" style="width: 95%;margin: 0.5rem 5% 0.5rem 0px;"></Input>
      </Col>
      <Col span="18" style="background-color: #eee;padding: 0.5rem;">
        <el-row>
          <el-col :span="7" v-for="n in 30" :key="n">
            <el-card :body-style="{padding: '10px'}">
              <img src="../../../assets/goods.png" class="image" >
              <div>
                <span class="name">好吃的汉堡</span>
                <div class="between" style="align-items: center;">
                  <span class="price">¥18</span>
                  <el-button type="text" class="button">编辑</el-button>
                </div>
              </div>
            </el-card>
            </ul>
          </el-col>
        </el-row>
      </Col>
      <div class="btn_box" @click="changeAddMaskStatus">
        <p class="btn">
          <Icon type="plus" color="#fff" size="18"></Icon>
          <span>添加</span>
        </p>
        <p class="btn">
          <Icon type="grid" color="#fff" size="18"></Icon>
          <span>添加分类</span>
        </p>
        <p class="btn">
          <Icon type="icecream" color="#fff" size="18"></Icon>
          <span>添加菜品</span>
        </p>
      </div>
    </Row>
    <div class="user_mask" v-show="isShowAddMask">
      <div class="box" style="width: 70%;">
        <div class="top_box between">
          <h3>添加菜品</h3>
          <p class="btns">
            <Button type="ghost" style="margin-right: 0.5rem;" @click="changeAddMaskStatus">取消</Button>
            <Button type="primary">保存</Button>
          </p>
        </div>
        <div class="between">
          <Row class="between">
            <Col span="16">
              <Form :model="formData" class="top_box">
                <Row class="between">
                  <Col span="10">
                    <FormItem label="商品名称">
                      <Input type="text" v-model="formData.name"></Input>
                    </FormItem>
                  </Col>
                  <Col span="4"></Col>
                  <Col span="10">
                    <FormItem label="商品所属分类">
                      <Input type="text" v-model="formData.type"></Input>
                    </FormItem>
                  </Col>
                </Row>
                <FormItem label="菜品描述">
                  <Input type="text" v-model="formData.desc"></Input>
                </FormItem>
              </Form>
              <Form :model="formData" class="top_box">
                <Row class="between">
                  <Col span="10">
                    <FormItem label="单价">
                      <Input v-model="formData.unit_price" type="text">
                        <span slot="prepend">¥</span>
                      </Input>
                    </FormItem>
                  </Col>
                  <Col span="4"></Col>
                  <Col span="10">
                    <FormItem label="餐盒费">
                      <Input v-model="formData.box_fee" type="text">
                        <span slot="prepend">¥</span>
                      </Input>
                    </FormItem>
                  </Col>
                </Row>
                <FormItem label="库存（当前／最大）">
                  <Input type="text" v-model="formData.cur_stock" style="width: 50px;" size="small"></Input>
                  <span>／</span>
                  <Input type="text" v-model="formData.max_stock" style="width: 50px;" size="small"></Input>
                </FormItem>
                <div class="add_btn">
                  <Icon type="ios-plus-outline" color="#2d8cf0" size="16"></Icon>
                  <span>添加规格</span>
                </div>
              </Form>
            </Col>
            <Col span="6" style="text-align: center;">
              <Upload multiple type="drag" action="">
                <div class="upload_padding">
                  <Icon type="android-restaurant"></Icon>
                  <Icon type="pizza"></Icon>
                  <p>点击上传菜品图片</p>
                </div>
              </Upload>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        input: "",
        formData: {
          name: "",
          type: "",
          desc: "",
          unit_price: "",
          box_fee: "",
          cur_stock: "",
          max_stock: ""
        },
        isShowAddMask: false,
        src: require('../../../assets/goods.png')
      }
    },
    methods: {
      changeAddMaskStatus () {
        this.isShowAddMask = !this.isShowAddMask;
      }
    }
  }
</script>

<style scoped>
  .between {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .ivu-col-span-6 {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image {
    width: 100%;
  }

  .name {
    font-size: 0.45rem;
    font-weight: 500;
    margin: 0.25rem 0px;
  }

  .price {
    color: #ff9900;
  }

  .el-col-7 {
    margin: 0.25rem;
  }

  .btn_box {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    justify-content: center;
    font-weight: bold;
    right: 1rem;
    top: 8rem;
    font-size: 0.4rem;
  }

  .btn {
    width: 2.2rem;
    margin: 0.25rem 0px;
    height: 2.2rem;
    border-radius: 50%;
    background-color: #3e76f6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.3);
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

  .box {
    background-color: #eee;
  }

  .top_box {
    background-color: white;
    padding: 0.35rem 0.5rem;
    margin-bottom: 0.5rem;
    box-shadow: 0px 5px 4px #ddd;
  }

  .ivu-row {
    width: 100%;
  }

  .el-upload-dragger {
    width: 90%;
    margin: 0.5rem 5%;
  }

  .add_btn {
    text-align: center;
    color: #2d8cf0;
    padding: 0.25rem;
    border-top: 1px solid #ddd;
  }

  .upload_padding {
    padding: 1.5rem 0.5rem;
  }
</style>
