<template>
  <div>
    <Form :model="formData" label-position="top">
      <FormItem label="消息推送">
        <FormItem v-for="(item, index) in propel_info" :key="index">
          <Checkbox v-model="item.required" style="width: 80px;">{{item.value}}</Checkbox>
          <Input v-model="item.tip" style="width: 400px"></Input>
        </FormItem>
      </FormItem>
      <FormItem label="微信提醒" class="parent">
        <RadioGroup v-model="formData.tip_word" @on-change="changeTip">
          <Radio label="不提醒"></Radio>
          <Radio label="提醒"></Radio>
        </RadioGroup>
        <Select v-model="formData.tip_time" clearable style="width:100px;margin-right: 0.5rem;" :disabled="!tip_flag ? true : false">
          <Option v-for="item in 24" :value="item" :key="item">{{item}}</Option>
        </Select>
        <Input placeholder="请输入微信提醒文字" v-model.number="formData.tip" style="width: 300px;" :disabled="!tip_flag ? true : false"></Input>
      </FormItem>
      <FormItem label="活动报名是否使用积分" class="parent">
        <RadioGroup v-model="formData.enroll_word" @on-change="changeEnroll">
          <Radio label="不使用"></Radio>
          <Radio label="使用"></Radio>
        </RadioGroup>
        <Input v-model.number="formData.enroll_point" style="width: 150px;" :disabled="!enroll_flag ? true : false">
          <span slot="append">积分</span>
        </Input>
      </FormItem>
       <FormItem label="分享获得积分" class="parent">
        <RadioGroup v-model="formData.share_word" @on-change="changeShare">
          <Radio label="无积分"></Radio>
          <Radio label="获得积分"></Radio>
        </RadioGroup>
        <Input v-model.number="formData.share_point" style="width: 150px;" :disabled="!share_flag ? true : false">
          <span slot="append">积分</span>
        </Input>
        <label style="margin: 0px 0.25rem 0px 0.75rem;">上限</label>
        <Input v-model.number="formData.share_point_limit" style="width: 150px;" :disabled="!share_flag ? true : false">
          <span slot="append">积分</span>
        </Input>
      </FormItem>
    </Form>
    <Button type="ghost" size="large" @click.once="lastStep">上一步</Button>
    <Button type="primary" size="large">发布活动</Button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        propel_info: [
          {
            value: "报名成功",
            tip: "您已成功报名***(默认活动标题名)活动",
            required: true
          },
          {
            value: "审核通过",
            tip: "您报名的***(默认活动标题名)活动，已审核通过",
            required: true
          },
          {
            value: "审核不通过",
            tip: "您报名的***(默认活动标题名)活动，审核不通过",
            required: true
          },
          {
            value: "签到成功",
            tip: "***(默认用户名)您好！恭喜您签到成功！",
            required: true
          },
          {
            value: "签到失败",
            tip: "抱歉，签到失败",
            required: true
          },
          {
            value: "重复签到",
            tip: "请勿重复签到！",
            required: true
          }
        ],
        formData: {
          tip_word: "不提醒",
          tip_time: "",
          tip: "",
          enroll_word: "不使用",
          enroll_point: 0,
          share_word: "无积分",
          share_point: 0,
          share_point_limit: 0
        },
        tip_flag: false,
        enroll_flag: false,
        share_flag: false
      }
    },
    methods: {
      lastStep () {
        this.$store.commit('decreaseCurrentStep')
      },
      changeTip () {
        this.tip_flag = !this.tip_flag;
      },
      changeEnroll () {
        this.enroll_flag = !this.enroll_flag;
      },
      changeShare () {
        this.share_flag = !this.share_flag;
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

  .ivu-btn {
    margin: 0rem 0.5rem 1.5rem;
  }

  .ivu-form-item-content {
    margin: 0.25rem 0px;
  }
</style>
