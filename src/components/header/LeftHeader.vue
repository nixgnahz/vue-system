<template>
  <div>
    <span class="system_name">VUEADMIN</span>
    <span @click="changeCollapse">
      <Icon type="navicon-round" size="25" color="#2d8cf0"></Icon>
    </span>
  </div>
</template>

<script>
  export default {
    methods: {
      changeCollapse () {
        this.$store.commit('changeCollapse');
      }
    }
  }
</script>

<style scoped>
  div {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .system_name {
    font-size: 0.65rem;
    margin-right: 0.5rem;
  }
</style>
