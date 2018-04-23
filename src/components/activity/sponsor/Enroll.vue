<template>
  <div>
    <Form :model="formData" label-position="top">
      <FormItem label="报名限制">
        <CheckboxGroup v-model="formData.enroll_limit">
          <Checkbox label="必须关注公众账号才能报名"></Checkbox>
          <Checkbox label="必须成为会员才能报名"></Checkbox>
          <Checkbox label="必须分享才能报名"></Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem label="付费活动" class="parent">
        <RadioGroup v-model="formData.pay_word" @on-change="changePay">
          <Radio label="免费"></Radio>
          <Radio label="费用"></Radio>
        </RadioGroup>
        <Input v-model.number="formData.pay_money" style="width: 150px;" :disabled="!pay_flag ? true : false">
          <span slot="append">元</span>
        </Input>
      </FormItem>
      <FormItem label="允许取消报名" class="parent">
        <RadioGroup v-model="formData.cancel_word" @on-change="changeCancel">
          <Radio label="不允许"></Radio>
          <Radio label="允许"></Radio>
        </RadioGroup>
        <Input v-model.number="formData.cancel_time" style="width: 150px;" :disabled="!cancel_flag ? true : false">
          <span slot="append">小时</span>
        </Input>
      </FormItem>
      <FormItem label="报名是否需要审核">
        <RadioGroup v-model="formData.check_word">
          <Radio label="不需要"></Radio>
          <Radio label="需要"></Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="设置报名表" class="parent">
        <draggable v-model="enroll_info" :options="dragOptions" @start="drag=true" @end="drag=false">
          <FormItem v-for="(item, index) in enroll_info" :key="index">
            <Checkbox v-model="item.required">必填</Checkbox>
            <Input v-model="item.value" style="width: 150px"></Input>
            <Input :placeholder="'提示语: ' + item.tip" style="width: 250px" class="tip"></Input>
            <el-button type="ghost" icon="el-icon-delete" size="mini" @click="removeEnrollInfo(index)"></el-button>
          </FormItem>
        </draggable>
      </FormItem>
      <el-button type="primary" size="small" @click="addEnrollInfo" style="margin-bottom: 1rem;">添加更多</el-button>
      <FormItem label="签到方式" class="parent">
        <RadioGroup v-model="formData.sign_way" @on-change="changeCode">
          <Radio label="签到二维码"></Radio>
          <Radio label="入场二维码"></Radio>
          <Radio label="会员二维码"></Radio>
          <Radio label="手机号"></Radio>
          <Radio label="暗号"></Radio>
          <Input v-model.number="formData.sign_code" style="width: 150px;" :disabled="!code_flag ? true : false" placeholder="请输入您的暗号"></Input>
        </RadioGroup>
      </FormItem>
    </Form>
    <Button type="ghost" size="large" @click.once="lastStep">上一步</Button>
    <Button type="primary" size="large" @click.once="nextStep">下一步</Button>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  export default {
    data () {
      return {
        dragOptions:{
          animation: 120,
          scroll: true,
          group: 'sortlist',
          ghostClass: 'ghost-style'
        },
        enroll_info: [
          {
            value: "姓名",
            tip: "请填写您的姓名",
            required: true
          },
          {
            value: "手机",
            tip: "请填写您的手机",
            required: true
          }
        ],
        formData: {
          enroll_limit: [],
          pay_word: "免费",
          pay_money: "",
          cancel_word: "不允许",
          cancel_time: "",
          check_word: "不需要",
          if_check: false,
          sign_way: "签到二维码",
          sign_code: ""
        },
        pay_flag: false,
        cancel_flag: false,
        code_flag: false
      }
    },
    components: {
      draggable
    },
    methods: {
      changePay () {
        this.pay_flag = !this.pay_flag;
      },
      changeCancel () {
        this.cancel_flag = !this.cancel_flag;
      },
      changeCode () {
        if(this.formData.sign_way == "暗号") {
          this.code_flag = true;
        } else{
          this.code_flag = false;
        }
      },
      addEnrollInfo () {
        var obj = {value: "", tip: "", required: false}
        this.enroll_info.push(obj)
      },
      removeEnrollInfo (index) {
        this.enroll_info.splice(index, 1)
      },
      lastStep () {
        this.$store.commit('decreaseCurrentStep')
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
    margin-left: 1rem;
  }

  .parent .ivu-form-item-content{
    display: flex;
  }

  .parent .ivu-form-item {
    margin-top: 0.5rem;
  }

  .tip {
    margin: 0px 0.5rem;
  }

  .ivu-btn {
    margin: 0rem 0.5rem 1.5rem;
  }
</style>
