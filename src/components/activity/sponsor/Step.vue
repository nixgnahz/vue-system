<template>
  <div>
    <Steps :current="current">
      <Step v-for="(item, index) in step.steps" :title="current > index ? '已完成' : '进行中'" :content="item" :key="item.content"></Step>
    </Steps>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        step: {
          steps: ["报名信息", "报道签名", "分享设置", "个性设置"]
        }
      }
    },
    computed: {
      current () {
        return this.$store.state.currentStep
      }
    }
  }
</script>

<style>

</style>
