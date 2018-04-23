<template>
  <div>
    <Step></Step>
    <Info v-if="step == 0"></Info>
    <Enroll v-if="step == 1"></Enroll>
    <Share v-if="step == 2"></Share>
    <Person v-if="step == 3"></Person>
  </div>
</template>

<script>
  import Step from './Step.vue'
  import Info from './Info.vue'
  import Enroll from './Enroll.vue'
  import Share from './Share.vue'
  import Person from './Person.vue'
  export default {
    computed: {
      step () {
        return this.$store.state.currentStep
      }
    },
    components: {
      Step,
      Info,
      Enroll,
      Share,
      Person
    },
    beforeRouteUpdate (to, from, next) {
      next();
    }
  }
</script>

<style>
  .ivu-steps {
    margin-top: 1rem;
  }
</style>
