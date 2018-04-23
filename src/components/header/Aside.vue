<template>
  <transition name="move">
    <aside>
      <i-circle :size="150" :trail-width="4" :stroke-width="5" :percent="percent" stroke-linecap="square" stroke-color="#43a3fb">
        <div class="circle">
          <h1>{{onlineUser}}</h1>
          <p>当前在线人数</p>
          <span>
            占总人数
            <i>75%</i>
          </span>
        </div>
      </i-circle>
      <p>
        <span class="title">CPU Usage</span>
        <Progress :percent="50" status="active"></Progress>
        <span class="content">348 Processes. 1/4 Cores.</span>
      </p>
      <p>
        <span class="title">Memory Usage</span>
        <Progress :percent="25" status="wrong"></Progress>
        <span class="content">243GB/256GB</span>
      </p>
      <p>
        <span class="title">SSD  Usage</span>
        <Progress :percent="25" status="success"></Progress>
        <span class="content">243GB/256GB</span>
      </p>
    </aside>
  </transition>
</template>

<script>
  export default {
    data () {
      return {
        allUser: 50000000,
        onlineUser: 42001776
      }
    },
    computed: {
      percent () {
        return this.onlineUser / this.allUser * 100
      }
    }
  }
</script>

<style scoped>
  aside {
    transition: all 0.3s linear;
    background-color: #fff;
    z-index: 100;
  }

  .ivu-chart-circle {
    margin-left: 1.5rem;
  }

  .circle h1 {
    font-size: 0.65rem;
    margin-bottom: 0.3rem;
    font-weight: 500;
  }

  .circle p {
    margin-bottom: 0.3rem;
    font-size: 0.4rem;
  }

  .circle span {
    font-size: 0.4rem;
  }

  aside>p {
    margin: 0.5rem 0px;
  }

  .move-enter {
    transform: translateX(100%);
  }

  .move-leave, .move-leave-active {
    transform: translateX(100%);
  }
</style>
