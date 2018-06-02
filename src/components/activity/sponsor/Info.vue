<template>
  <div>
    <Form ref="formData" :model="formData.required" :label-width="80" :rules="ruleData">
      <FormItem label="活动名称" prop="name">
        <Input v-model="formData.required.name" placeholder="请输入活动名称" style="width:250px;"></Input>
      </FormItem>
      <FormItem label="活动类型" required>
        <RadioGroup v-model="formData.required.type" size="large">
          <Radio label="测试活动"></Radio>
          <Radio label="精彩活动"></Radio>
          <Radio label="免费活动"></Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="活动标签">
        <Input v-model.trim="label" placeholder="请输入活动标签" style="width: 150px;"></Input>
        <span @click="addLabel" class="add_btn">
          <el-button icon="el-icon-plus" size="small"></el-button>
        </span>
        <el-tag v-for="(item, index) in labels" :key="item" closable type="info" class="label" @close="removeLabel(index)">{{item}}</el-tag>
      </FormItem>
      <FormItem label="活动时间" required>
        <Row>
          <Col span="5">
            <FormItem>
              <DatePicker type="date" v-model="formData.required.activity_date" format="yyyy-MM-dd"></DatePicker>
            </FormItem>
          </Col>
          <Col span="1" style="text-align: center;">-</Col>
          <Col span="5">
            <FormItem>
              <TimePicker type="time" v-model="formData.required.activity_time"></TimePicker>
            </FormItem>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="报名时间" required>
        <Row>
          <Col span="5">
            <FormItem>
              <DatePicker type="date" v-model="formData.required.enroll_date" format="yyyy-MM-dd"></DatePicker>
            </FormItem>
          </Col>
          <Col span="1" style="text-align: center;">-</Col>
          <Col span="5">
            <FormItem>
              <TimePicker type="time" v-model="formData.required.enroll_time"></TimePicker>
            </FormItem>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="活动地点" required>
        <Select v-model="formData.required.province" style="width:100px;" @on-change="getProvince">
          <Option v-for="item in province" :value="item.value" :key="item.value">{{item.value}}</Option>
        </Select>
        <Select v-model="formData.required.city" style="width:100px;margin: 0.25rem;" @on-change="getCity">
          <Option v-for="item in city" :value="item.value" :key="item.value">{{item.value}}</Option>
        </Select>
        <Select v-model="formData.required.district" style="width:100px;margin: 0.25rem;">
          <Option v-for="item in district" :value="item" :key="item">{{item}}</Option>
        </Select>
        <Input v-model.trim="formData.required.address" placeholder="请输入活动具体地址" style="width: 300px;"></Input>
      </FormItem>
      <FormItem label="活动人数" class="parent">
        <RadioGroup v-model="formData.person_limit" @on-change="changePerson">
          <Radio label="无限制"></Radio>
          <Radio label="限制"></Radio>
        </RadioGroup>
        <Input v-model.number="formData.person" style="width: 150px;" :disabled="!formData.limit_flag ? true : false">
          <span slot="append">人</span>
        </Input>
      </FormItem>
      <FormItem label="活动封面">
        <el-upload class="upload-demo" drag action="" multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </div>
        </el-upload>
      </FormItem>
      <FormItem label="活动简介">
        <Input v-model="formData.description" type="textarea" :rows="4" placeholder="请输入活动简介"></Input>
      </FormItem>
      <FormItem label="评价功能">
        <RadioGroup v-model="formData.evaluate">
          <Radio label="不开启"></Radio>
          <Radio label="实时评价"></Radio>
          <Radio label="审核后评价"></Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="赞助广告">
        <el-upload class="upload-demo" drag action="" multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em>
            <div class="el-upload__tip" slot="tip">图片尺寸建议比例1:4.18，如160*666像素，且不超过2M</div>
          </div>
        </el-upload>
      </FormItem>
      <FormItem label="广告信息">
        <Input v-model="formData.advertise.title" type="text" placeholder="请填写广告标题"></Input>
        <Input v-model="formData.advertise.content" type="textarea" :rows="3" placeholder="请填写广告内容" style="margin: 0.5rem 0px;"></Input>
        <Input v-model="formData.advertise.link" type="text" placeholder="请填写赞助链接"></Input>
      </FormItem>
       <Button type="ghost" size="large">预览</Button>
       <Button type="primary" size="large" @click="nextStep">下一步</Button>
    </Form>
  </div>
</template>

<script>
  import Vue from 'vue'
  import address from '../../../address/address.js'
  export default {
    data () {
      return {
        formData: {
          required: {
            name: "",
            type: "",
            activity_date: "",
            activity_time: "",
            enroll_date: "",
            enroll_time: "",
            province: "",
            city: "",
            district: "",
            address: ""
          },
          person_limit: "无限制",
          limit_flag: false,
          person: "",
          description: "",
          evaluate: "不开启",
          advertise: {
            title: "",
            content: "",
            link: ""
          }
        },
        ruleData: {name: [{ required: true, message: '请填写活动名称', trigger: 'blur' }]},
        province: address.getProvince(),
        city: [],
        district: [],
        label: "",
        labels: []
      }
    },
    created: function () {
      let activity_date = new Date();
      let enroll_date = activity_date.getFullYear() + 1 + "-" + (activity_date.getMonth() + 1) + "-" + activity_date.getDate();
      Vue.set(this.formData.required, 'activity_date', activity_date);
      Vue.set(this.formData.required, 'enroll_date', enroll_date);
      Vue.set(this.formData.required, 'activity_time', activity_date);
      Vue.set(this.formData.required, 'enroll_time', activity_date);
    },
    methods: {
      addLabel () {
        if(!this.label) return;
        for(let i = 0; i < this.labels.length; i++) {
          if(this.labels[i] == this.label) {
            return;
          }
        }
        this.labels.push(this.label);
        this.label = "";
      },
      removeLabel (index) {
        this.labels.splice(index, 1);
      },
      changePerson () {
        this.formData.limit_flag = !this.formData.limit_flag;
      },
      getProvince (value) {
        this.city = address.getCity(value);
      },
      getCity (value) {
        this.district = address.getDistrict(this.formData.required.province, value);
      },
      nextStep () {
        for(var key in this.formData.required) {
          if(!this.formData.required[key]) {
            return;
          }
        }
        this.$store.commit('increaseCurrentStep')
      }
    }
  }
</script>

<style scoped>
  .ivu-form {
    margin-top: 1rem;
  }

  .add_btn {
    margin: 0px 0.25rem;
  }

  .label {
    margin-right: 0.2rem;
  }

  .parent .ivu-form-item-content{
    display: flex;
  }

  .ivu-btn {
    margin: 0rem 0.5rem 1.5rem;
  }
</style>
